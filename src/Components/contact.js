import React from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreen from "./fullscreen";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const ContactMe = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_qywzscm"
        const templateID = "template_sh54jks"
        const publicKey = "2UjgF7mDeMhqzUNbI"

        const templateParams = {
            from_name: formik.values.firstName,
            from_email: formik.values.email,
            subject: formik.values.subject,
            to_name: "Robert",
            message: formik.values.comment
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey).then(() => {
            swal("Danke für deine Anfrage!", "Ich melde mich demnächst bei dir.", "success");
            formik.resetForm()
        }).catch((error) => {
            swal("Es ist ein Fehler aufgetreten!", "Versuche es bitte erneut.", "error")
        })
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            subject: "",
            comment: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Bitte gib deinen Namen an"),
            email: Yup.string().required("Bitte gib deine E-Mailadresse an").email("Ungültige E-Mailadresse"),
            subject: Yup.string().required("Bitte gib einen Betreff an"),
            comment: Yup.string().required("Bitte gib deine Anfrage ein").min(25, "Muss mindestens 25 Zeichen enthalten")
        }),
    });

    return (
        <FullScreen
            backgroundColor="#EAE7DC"
            py={16}
            spacing={8}
            color="black"
        >
            <VStack w="1024px" p={32} alignItems="flex-start" onSubmit={handleSubmit}>
                <Heading as="h1" id="kontakt-section" className="heading" color="#e85a4f">
                    Kontakt
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                                <FormLabel htmlFor="firstName" className="label">Name</FormLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    {...formik.getFieldProps("firstName")}
                                    borderColor="#e85a4f"
                                />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email" className="label">E-Mailadresse</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    {...formik.getFieldProps("email")}
                                    borderColor="#e85a4f"
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.subject && formik.touched.subject}>
                                <FormLabel htmlFor="subject" className="label">Betreff</FormLabel>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formik.values.subject}
                                    {...formik.getFieldProps("subject")}
                                    borderColor="#e85a4f" />
                                <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                                <FormLabel htmlFor="comment" className="label">Deine Anfrage</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={250}
                                    value={formik.values.comment}
                                    {...formik.getFieldProps("comment")}
                                    borderColor="#e85a4f"
                                />
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="red" width="full" color="#EAE7DC">
                                Senden
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreen>
    );
};

export default ContactMe;