import { reduxForm } from 'redux-form'
import FormCode, { IProps } from './FormCode'

export default reduxForm<any, IProps>({
    form: 'code',
})(FormCode)