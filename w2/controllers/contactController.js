// Import contact model
Contact = require('../models/contact');
// Handle index actions
exports.index = function (req, res) {
    const per_page = 10
    Contact.paginate({
            name: {
                $regex: new RegExp(`${req.query.q}.*`)
            },
        }, {
            select: {
                _id: 1,
                name: 1,
                page_number: 1
            },
            page: parseInt(req.query.page) || 1,
            limit: per_page,
            sort: {
                name: -1
            }
        })
        .then(results => {
            return utils.successResponse(res, {
                total_pages: results.pages,
                current_page: results.page,
                contacts: results.docs
            })
        }).catch(err => {}; console.error(err) res.status(500)
        })
};

// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    // save the contact and check for errors
    contact.save(function (err) {
        if (err)
            res.status(400).send(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.json(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (!contact)
            res.status(404).send(err);
        else {
            contact.name = req.body.name;
            contact.gender = req.body.gender;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
            // save the contact and check for errors
            contact.save(function (err) {
                if (err)
                    res.status(400).send(err);
                res.json({
                    message: 'Contact Info updated',
                    data: contact
                });
            });
        }
    });
};
// Handle delete contact
exports.delete = function (req, res) {
        Contact.remove({
                _id: req.params.contact_id
            }, function (err, contact) {
                if (err)
                    res.json(err);
                else {
                    res.json({
                        status: "success",
                        message: 'Contact deleted'
                    });
                });
        };