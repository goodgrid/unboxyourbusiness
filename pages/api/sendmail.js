import { Config } from "../../components/config";

function sendEmail(req, res) {
    console.log(req.body)
    return new Promise((resolve, reject) => {
        fetch('https://api.sendinblue.com/v3/smtp/email', {
            method: 'POST',
            body: JSON.stringify({
              "sender":{  
                  "name":"Unboxyourbusiness Contact Form",
                  "email":"info@unboxyourbusiness"
               },
               "to":[  
                  {  
                     "email":"koen@goodgrid.nl",
                     "name":"Koen Bonnet"
                  }
               ],
               "subject":req.body.subject,
               "htmlContent":"<html><head></head><body><p>Hello,</p>This is an email sent from Unboxyourbusiness.</p><p>Name: " + req.body.fullname+ "<br/>Email: " + req.body.email + " <br/>Subject: " + req.body.subject + "</p><p>" + req.body.message + "</p></body></html>"
            }),
            headers: {
              'Content-Type': 'application/json',
              'api-key': Config.sendinblueKey
            }
          })
          .then((response) => {
             res.status(response.status).json({ error: "" })
            })
          
    })

}
 
export default sendEmail;