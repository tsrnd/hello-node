
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db('quan');
    const test = new MongoTest();
    // test.createCollection(dbo, db);
    //   test.insertOne(dbo, db);
    // test.findOne(dbo, db);
    // test.insertMany(dbo, db);
    test.find(dbo, db);
    // test.sort(dbo, db);
    // test.deleteOne(dbo, db);
    // test.deleteMany(dbo, db);
    // test.dropCollection(dbo, db);
    // test.updateOne(dbo, db);
    // test.updateMany(dbo, db);
    // test.join(dbo, db);
});

class MongoTest {
    createCollection(dbo, db) {
        dbo.createCollection('users', (err, res) => {
            if (err) throw err;
            console.log('Collection created!');
            db.close();
        });
    }

    insertOne(dbo, db) {
        dbo.collection('users').insertOne({ name: 'Quan', age: 15 }, (err, res) => {
            if (err) throw err;
            console.log('Insert one done!');
            console.log(res);
            db.close();
        });
    }

    insertMany(dbo, db) {
        var datas =
            [
                { name: 'Quan1', age: 1 },
                { name: 'Quan2', age: 2 },
                { name: 'Quan3', age: 3 }
            ];
        dbo.collection('users').insertMany(datas, (err, res) => {
            if (err) throw err;
            console.log('Insert many done!');
            console.log('Number insert', res.insertedCount);
            console.log('status', res.result);
            console.log('datas', res.ops);
            db.close();
        });
    }

    findOne(dbo, db) {
        dbo.collection('users').findOne({ projection: { _id: 0, name: 1 } }, (err, res) => {
            if (err) throw err
            console.log(res);
            db.close();
        });
    }

    find(dbo, db) {
        // dbo.collection('users').find({ name: /^\w+$/ }, { projection: { _id: 1, name: 1 } }).limit(2).toArray((err, res) => {
        dbo.collection('products').find({ _id: 222 }, { projection: { _id: 1, name: 1 } }).toArray((err, res) => {
            if (err) throw err;
            console.log(res);
            db.close();
        });
    }

    sort(dbo, db) {
        dbo.collection('users').find().sort({ _id: 1 }).toArray((err, res) => {
            if (err) throw err;
            console.log('After sort\n: ', res);
            db.close();
        });
    }

    deleteOne(dbo, db) {
        dbo.collection('users').deleteOne({ age: 2 }, (err, res) => {
            if (err) throw err;
            console.log(res.result);
            db.close();
        });
    }

    deleteMany(dbo, db) {
        dbo.collection('users').deleteMany({ name: /^.+[12]$/ }, (err, res) => {
            if (err) throw err;
            console.log('Delete Many');
            console.log(res.deletedCount);
            db.close();
        });
    }

    dropCollection(dbo, db) {
        dbo.collection('users').drop((err, res) => {
            if (err) throw err;
            console.log('Collection deleted');
            console.log(res);
            db.close();
        });
    }

    updateOne(dbo, db) {
        dbo.collection("users").updateOne({age: 3}, {$set: {name: "Top", age: 100}}, (err, res) => {
            if (err) throw err;
            console.log('Update OK');
            console.log(res);
            db.close();
        });
    }

    updateMany(dbo, db) {
        dbo.collection("users").updateMany({name: /Quan[1]/}, {$set: {name: "Top"}}, (err, res) => {
            if (err) throw err;
            console.log('Update Many OK');
            console.log(res);
            db.close();
        });
    }

    join (dbo, db) {
        dbo.collection("book_detail").aggregate([
            {
                $lookup:
                    {
                        from: "books",
                        localField: "book_id",
                        foreignField: '_id',
                        as: "bookDetail"
                    }
            }
        ]).toArray((err, res) => {
            if (err) throw err;
            console.log(res);
            db.close();
        });
    }
}
