import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formError, setFormError] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });
    const [open, setOpen] = React.useState(false);

    const handleFormError = (invalidFields, name, value) => {
        setFormError({
            ...formError,
            [name]: value
        });
        if (invalidFields) {
            setFormError({
                ...formError,
                ...invalidFields
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (!e.target.validity.valid) {
            handleFormError(null, name, true);
        } else {
            handleFormError(null, name, false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isAllFieldsFilled = true;
        let invalidFields = {}
        for (let [key, value] of Object.entries(formData)) {
            if (value === "") {
                isAllFieldsFilled = false;
                invalidFields[key] = true;
            }
        }
        if (isAllFieldsFilled) {
            setOpen(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            handleFormError(invalidFields);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className="contact">
            <h1>Contact</h1>
            <form style={{maxWidth: "500px", border: "1px solid #c4c4c4", padding: "50px", borderRadius: "10px"}}>
                <Stack spacing={2}>
                    <TextField required error={formError["name"]} label="Name" name="name" onChange={handleChange} value={formData['name']} />
                    <TextField required error={formError["email"]} label="Email" name="email" onChange={handleChange} value={formData['email']} />
                    <TextField required error={formError["subject"]} label="Subject" name="subject" onChange={handleChange} value={formData['subject']} />
                    <TextField required error={formError["message"]} label="Message" name="message" multiline rows={4} onChange={handleChange} value={formData['message']} />
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit} ></Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Message Sent" action={action} />
                </Stack>
            </form>
        </div>
    );
};

export default Contact;
