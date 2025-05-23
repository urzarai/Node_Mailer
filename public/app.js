const contactForm = document.querySelector('.contact-form');

let senderName = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('Submit Clicked')

    let formData = 
    {
        senderName: senderName.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload=function()
    {
        console.log(xhr.responseText);
        if(xhr.responseText=='success')
        {
            alert('Email send');
            senderName.value='';
            email.value='';
            subject.value='';
            message.value='';
        }
        else
        {
            alert('Something went wrong');
        }
    }
    xhr.send(JSON.stringify(formData));
})
