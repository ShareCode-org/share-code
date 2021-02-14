import React from 'react';
import addPost from '../../actions/addPost';
import { Formik, Form, FastField, Field } from 'formik';
import * as Yup from 'yup';
import { decodeToken } from 'react-jwt';
import Modal from 'react-modal';
import PostButton from '../post-button/index';
import {
    PostPageDiv,
    PostCaptcha,
    ErrorSpan
} from './style';

const PostForm = () => {
    const [IsOpen, setIsOpen] = React.useState(false);
    const tokenData = decodeToken(localStorage.getItem('token'));

    const AddPostSchema = Yup.object().shape({
        title: Yup.string()
            .min(8, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        description: Yup.string()
            .min(15, 'Too Short!')
            .max(40, 'Too Long!')
            .required('Required'),
        code: Yup.string()
            .min(50, 'Too Short!')
            .required('Required'),
        recaptcha: Yup.string().required('Verify the captcha!')
    });

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    return (
        <div>
            <PostPageDiv>
                <PostButton onClick={() => setIsOpen(true)} />
                <Modal
                    isOpen={IsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Post form"
                >
                    <Formik
                        initialValues={{
                            title: '',
                            description: '',
                            code: '',
                            createdBy: tokenData.username,
                            recaptcha: ''
                        }}
                        validationSchema={AddPostSchema}
                        onSubmit={(values, { resetForm }) => {
                            addPost({
                                values,
                                resetForm
                            });
                        }}
                    >
                        {({ errors, touched, setFieldValue }) => (
                            <Form>
                                <div>
                                    <Field
                                        name='title'
                                        type='title'
                                        placeholder="Title"
                                    />
                                </div>
                                {errors.title && touched.title ? (
                                    <ErrorSpan>{errors.title}</ErrorSpan>
                                ) : null}
                                <div>
                                    <Field
                                        name='description'
                                        type='description'
                                        placeholder="Description"
                                    />
                                </div>
                                {errors.description && touched.description ? (
                                    <ErrorSpan>{errors.description}</ErrorSpan>
                                ) : null}
                                <div>
                                    <Field
                                        as='textarea'
                                        name='code'
                                        type='code'
                                        placeholder="Code"
                                    />
                                </div>
                                {errors.code && touched.code ? (
                                    <ErrorSpan>{errors.code}</ErrorSpan>
                                ) : null}
                                <div>
                                    <FastField
                                        component={PostCaptcha}
                                        name="recaptcha"
                                        sitekey="6LdR6CYaAAAAAIA-PEqiHM8RqNEndngWJBKG0__u"
                                        onChange={value => setFieldValue("recaptcha", value)}
                                    />
                                    {errors.recaptcha && touched.recaptcha ? (
                                        <ErrorSpan>{errors.recaptcha}</ErrorSpan>
                                    ) : null}
                                    <div>
                                        <button
                                            className='centred-button'
                                            type='submit'
                                        >
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            </PostPageDiv>
        </div>
    )
};

export default PostForm;