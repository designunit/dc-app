import { reduxForm } from 'redux-form'
// import { ILoginInfo } from 'src/application/types'
// import { t } from 'src/translation'
import FormLogin, { IProps } from './FormLogin'

const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
// const validate = (values: ILoginInfo) => {
const validate = (values: any) => {
    const errors: any = {}

    // if (!values.username) {
    //     errors.username = t('Required')
    // } else if (!isEmail(values.username)) {
    //     errors.username = t('Invalid email address')
    // }

    return errors
}

// export default reduxForm<ILoginInfo, IProps>({
export default reduxForm<any, IProps>({
    form: 'login',
    // validate,
})(FormLogin)