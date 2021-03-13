import * as Yup from 'yup';

export const validation = Yup.object().shape({
    username: Yup.string()
        .required('Chưa nhập username')
        .min(6, 'Username tối thiểu 6 ký tự')
        .max(12, 'Username tối đa 12 ký tự'),
    password: Yup.string()
        .required('Chưa nhập password')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            'Password ít nhất 8 ký tự , ít nhất 1 ký tự viết hoa và chữ số')
    }
);