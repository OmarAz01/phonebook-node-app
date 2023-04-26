const Contact = require('../models/contactModel');


const getContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (contacts.length === 0) throw Error;
        res.status(200).json(contacts)
    }
    catch (error) {
        res.status(404).json({ title: "No Contacts", message: error.message })
    }
}

const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).json(contact)
    } catch (error) {
        res.status(404).json({ title: "Contact Not Found", message: error.message })        
    }
}

const createContact = async (req, res) => {

    const { name, phone } = req.body;
    if (!name || !phone) {
        return res.status(400).json({ message: 'Please provide name and phone' });
    }
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(400).json({ title: "Error Creating Contact", message: error.message })
    }
}

const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ title: "Contact Does Not Exist", message: error.message });
    }
}

const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Contact Deleted" });
    } catch (error) {
        res.status(400).json({ title: "No Contact Found ", message: error.message });
    }
}

module.exports = { getContact, getContactById, createContact, updateContact, deleteContact }