const router = require('express').Router();
router.get("/clients", (req, res) => {
    data = req.data || {};
    data.page = {
        theme: "clients.twig"
    }
    res.render("forms.twig", data);
})
router.get("/vendor", (req, res) => {
    data = req.data || {};
    data.page = {
        theme: "clients.twig"
    }
    res.render(".twig", data);
})
router.get("/add", (req, res) => {
    data = req.data || {};
    data.page = {
        theme: "add.twig",
    }
    data.tabs = [
        {
            id: "Company_Settings",
            title: "Company",
            form: [
                {
                    name: "name",
                    label: "Company Name",
                    class:"col-md-12",
                    type: "text",
                    value: ""
                },
                {
                    name: "name",
                    label: "Legal Business Name",
                    class:"col-md-12",
                    type: "text",
                    value: ""
                },
                {
                    name: "logo",
                    type: "file",
                    label: "Company Logo",
                    class:"col-md-12",
                    value: ""
                },
                {
                    name: "website",
                    type: "url",
                    label: "Company Website",
                    class:"col-md-12",
                    value: ""
                },
                {
                    name: "vendor",
                    type: "checkbox",
                    label: "Vendor",
                    class:"col-md-12",
                    value: "vendor"
                },
                {
                    name: "client",
                    type: "checkbox",
                    label: "Client",
                    class:"col-md-12",
                    value: "client"
                }
            ]
        }, 
        {
            id: "Contact_Details",
            title: "Contact Person 1",
            form: [
                {
                    name: "contact_name_sal",
                    label: "Salutation",
                    class:"col-md-1",
                    type: "select",
                    options: ["Mr", "Mrs", "Ms", "Dr"]
                },
                {
                    name: "contact_fname",
                    label: "First Name",
                    class:"col-md-4",
                    type: "text",
                    value: ""
                },
                {
                    name: "contact_mname",
                    label: "Middle Name",
                    class:"col-md-3",
                    type: "text",
                    value: ""
                },
                {
                    name: "contact_lname",
                    label: "Last Name",
                    class:"col-md-4",
                    type: "text",
                    value: ""
                },
                {
                    name: "contact_designation",
                    label: "Designation",
                    class:"col-md-6",
                    type: "text",
                    value: ""
                },
                {
                    name: "contact_jobrole",
                    label: "Job Role",
                    class:"col-md-6",
                    type: "text",
                    value: ""
                },
                {
                    name: "contact_email",
                    label: "Email",
                    class:"col-md-6",
                    type: "email",
                    value: ""
                },
                {
                    name: "contact_phone",
                    label: "Phone",
                    class:"col-md-6",
                    type: "tel",
                    value: ""
                },
                {
                    name: "contact_im_type",
                    label: "IM",
                    class:"col-md-4",
                    type: "select",
                    options: ["Skype", "WhatsApp", "Viber", "Facebook", "Twitter", "Instagram", "Linkedin", "Hangouts"],
                    value: ""
                },
                {
                    name: "contact_im_id",
                    label: "IM ID",
                    class:"col-md-8",
                    type: "text",
                    value: ""
                }
            ]
        }
    ];
    res.render("forms.twig", data);
})
module.exports = router;
