
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
              'api-key':'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'
            }
          })
          .then(response => res.status(200).json({ error: "" }))
          .then(text => console.log(text))
    })

}
 
export default sendEmail;