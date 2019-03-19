const db = require('./db');

const userSchema = new db.schema({
    username: String,
    fullname: String,
    pasword: String,
    email: String,
    avatar: String,
    role: {
        type: db.schema.Types.ObjectId,
        ref: 'Roles',
    },
    age: Number,
    bio: {
        h: Number,
        w: Number,
    },
    status: Boolean
});

const roleSchema = new db.schema({
    role: Number,
    description: String,
    users: [{
        type: db.schema.Types.ObjectId,
        ref: 'Users'
    }]
});

userSchema.plugin(db.autoInc, {
    model: 'Users',
    field: 'user_id',
    startAt: 1
});

roleSchema.plugin(db.autoInc, {
    model: 'Roles',
    field: 'role_id',
    startAt: 1
});

var roleModel = db.conn.model('Roles', roleSchema);

// roleModel.create({
//     role: 2,
//     description: "member"
// })

userSchema.pre("save", function (next) {
    if (!this.role) {
        roleModel.findOne({
            role: 2 // default
        }, (error, data) => {
            if (error) {
                next(error);
            }
            this.role = data._id;
            next();
        })
    }
})

userSchema.post("save", function (next) {
    var user = this;
    roleModel.findOne({
        _id: user.role
    }, (error, data) => {
        if (error) {
            next(error);
        }
        data.users.push(user._id);
        roleModel.create(data, function (error) {
            if (error) {
                next(error);
            }
        })
        // next();
    })
})

// userSchema.pre("remove", {
//     query: true,
//     doc: true
// }, function (next) {
//     console.log("a".repeat(10), this);
//     // var user = this;
//     // roleModel.findOne({
//     //     _id: user.role
//     // }, (error, data) => {
//     //     if (error) {
//     //         next(error);
//     //     }
//     //     // data.users.remove(user.role);
//     //     // roleModel.create(data, function (error) {
//     //     //     if (error) {
//     //     //         next(error);
//     //     //     }
//     //     // })
//     // })
// })

module.exports = {
    Users: db.conn.model('Users', userSchema),
    Roles: roleModel,
}
