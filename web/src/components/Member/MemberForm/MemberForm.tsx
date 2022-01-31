import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const MemberForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.member?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="first_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>
        <TextField
          name="first_name"
          defaultValue={props.member?.first_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="first_name" className="rw-field-error" />

        <Label
          name="last_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>
        <TextField
          name="last_name"
          defaultValue={props.member?.last_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="last_name" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>
        <TextField
          name="phone"
          defaultValue={props.member?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="mobil"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mobil
        </Label>
        <TextField
          name="mobil"
          defaultValue={props.member?.mobil}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="mobil" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.member?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MemberForm
