const router = require('express').Router();
const mongoose = require('mongoose');
const Company = mongoose.model("companies", require("../modal/Company.js"));
router.get("/clients", async (req, res) => {
    data = req.data || {};
    data.page = { 
        theme: "clients.twig" 
    }
    companies= await Company.find({"type.client":true});
    data.companies = JSON.parse(JSON.stringify(companies));
    res.render("forms.twig", data);
}) 
router.get("/client/:id", async (req, res) => {
    data = req.data || {};  
    data.page = {
        theme: "client.twig"  
    }
    company= await Company.findById(req.params.id);
    data.company = JSON.parse(JSON.stringify(company));
    res.render("forms.twig", data);
})
router.get("/vendor", (req, res) => {
    data = req.data || {};
    data.page = {
        theme: "clients.twig"
    }
    res.render("forms.twig", data);
})
router.route("/add")
    .post(async (req, res) => {
        company = await new Company({
            type: {
                vendor: (req.body.vendor !== null),
                client: (req.body.client !== null)
            },
            contact: [
                {
                    name: {
                        salutation: req.body.contact_name_sal,
                        first: req.body.contact_fname,
                        middle: req.body.contact_mname,
                        last: req.body.contact_lname  
                    },
                    email: req.body.contact_email,
                    phone: req.body.contact_phone,
                    jobrole: req.body.contact_jobrole,
                    department: req.body.contact_department,
                    im: {
                        whatsapp: req.body.contact_im_whatsapp,
                        skype: req.body.contact_im_skype,
                        telegram: req.body.contact_im_telegram,
                        instagram: req.body.contact_im_instagram,
                        aol: req.body.contact_im_aol,
                        qq: req.body.contact_im_qq,
                        wechat: req.body.contact_im_wechat
                    }
                }
            ],
            name: req.body.name,
            legalName: req.body.legal,
            logo: req.body.logo,
            website: req.body.website,
            vendor_urls: {
                complete: req.body.url_complete,
                overquota: req.body.url_overquota,
                terminate: req.body.url_terminate,
                security: req.body.url_security,
                postback: req.body.url_postback
            },
            office: [
                {
                    tag: req.body.office_tag,
                    al1: req.body.office_al1,
                    al2: req.body.office_al2,
                    city: req.body.office_city,
                    state: req.body.office_state,
                    country: req.body.office_country,
                    zip: req.body.office_zipcode
                }
            ]
        });
        await company.save();
        res.redirect("/company/clients");
    })
    .get(async (req, res) => {
        data = req.data || {};
        data.page = {
            theme: "add.twig",
        }
        data.tabs = [
            {
                id: "Company_Settings",
                title: "Company",
                active: "active",
                form: [
                    {
                        name: "name",
                        label: "Company Name",
                        class: "col-md-12",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "name",
                        label: "Legal Business Name",
                        class: "col-md-12",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "logo",
                        type: "file",
                        label: "Company Logo",
                        class: "col-md-4",
                        value: ""
                    },
                    {
                        name: "website",
                        type: "url",
                        label: "Company Website",
                        class: "col-md-8",
                        value: ""
                    },
                    {
                        name: "vendor",
                        type: "checkbox",
                        label: "Vendor",
                        class: "col-md-4",
                        value: "vendor"
                    },
                    {
                        name: "client",
                        type: "checkbox",
                        label: "Client",
                        class: "col-md-4",
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
                        class: "col-md-1",
                        type: "select",
                        options: ["Mr", "Mrs", "Ms", "Dr"]
                    },
                    {
                        name: "contact_fname",
                        label: "First Name",
                        class: "col-md-4",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "contact_mname",
                        label: "Middle Name",
                        class: "col-md-3",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "contact_lname",
                        label: "Last Name",
                        class: "col-md-4",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "contact_designation",
                        label: "Designation",
                        class: "col-md-6",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "contact_jobrole",
                        label: "Job Role",
                        class: "col-md-6",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "contact_email",
                        label: "Email",
                        class: "col-md-6",
                        type: "email",
                        value: ""
                    },
                    {
                        name: "contact_phone",
                        label: "Phone",
                        class: "col-md-6",
                        type: "tel",
                        value: ""
                    },
                    {
                        name: "contact_im_type",
                        label: "IM",
                        class: "col-md-4",
                        type: "select",
                        options: ["Skype", "WhatsApp", "Viber", "Facebook", "Twitter", "Instagram", "Linkedin", "Hangouts"],
                        value: ""
                    },
                    {
                        name: "contact_im_id",
                        label: "IM ID",
                        class: "col-md-8",
                        type: "text",
                        value: ""
                    }
                ]
            }
        ];
        res.render("forms.twig", data);
    })
module.exports = router;
