import { WrappedFieldMetaProps } from 'redux-form'

export function getHelpFromMeta(meta: WrappedFieldMetaProps) {
    const { touched, error } = meta

    const hasError = touched && Boolean(error)
    const help: string = hasError ? error : undefined
    const validateStatus: undefined | 'error' = hasError ? 'error' : undefined

    return {
        help,
        validateStatus,
    }
}
