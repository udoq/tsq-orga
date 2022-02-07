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

const CourseForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.course?.id)
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
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>
        <TextField
          name="category"
          defaultValue={props.course?.category}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="category" className="rw-field-error" />

        <Label
          name="course_type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Course type
        </Label>
        <TextField
          name="course_type"
          defaultValue={props.course?.course_type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="course_type" className="rw-field-error" />

        <Label
          name="day"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Day
        </Label>
        <TextField
          name="day"
          defaultValue={props.course?.day}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="day" className="rw-field-error" />

        <Label
          name="time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Time
        </Label>
        <TextField
          name="time"
          defaultValue={props.course?.time}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="time" className="rw-field-error" />

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

export default CourseForm
