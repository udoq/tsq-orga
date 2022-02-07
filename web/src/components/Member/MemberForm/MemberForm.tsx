import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
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
          name="kd_nr"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Kd nr
        </Label>
        <NumberField
          name="kd_nr"
          defaultValue={props.member?.kd_nr}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="kd_nr" className="rw-field-error" />

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
          name="birthday"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Birthday
        </Label>
        <DatetimeLocalField
          name="birthday"
          defaultValue={formatDatetime(props.member?.birthday)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="birthday" className="rw-field-error" />

        <Label
          name="gender"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender
        </Label>
        <TextField
          name="gender"
          defaultValue={props.member?.gender}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="gender" className="rw-field-error" />

        <Label
          name="street"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Street
        </Label>
        <TextField
          name="street"
          defaultValue={props.member?.street}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="street" className="rw-field-error" />

        <Label
          name="zipcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Zipcode
        </Label>
        <TextField
          name="zipcode"
          defaultValue={props.member?.zipcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="zipcode" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>
        <TextField
          name="city"
          defaultValue={props.member?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="city" className="rw-field-error" />

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

        <Label
          name="courseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Course id
        </Label>
        <TextField
          name="courseId"
          defaultValue={props.member?.courseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="courseId" className="rw-field-error" />

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
