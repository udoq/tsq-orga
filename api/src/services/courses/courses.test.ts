import {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} from './courses'
import type { StandardScenario } from './courses.scenarios'

describe('courses', () => {
  scenario('returns all courses', async (scenario: StandardScenario) => {
    const result = await courses()

    expect(result.length).toEqual(Object.keys(scenario.course).length)
  })

  scenario('returns a single course', async (scenario: StandardScenario) => {
    const result = await course({ id: scenario.course.one.id })

    expect(result).toEqual(scenario.course.one)
  })

  scenario('creates a course', async () => {
    const result = await createCourse({
      input: {
        category: 'String',
        course_type: 'String',
        day: 'String',
        time: 'String',
      },
    })

    expect(result.category).toEqual('String')
    expect(result.course_type).toEqual('String')
    expect(result.day).toEqual('String')
    expect(result.time).toEqual('String')
  })

  scenario('updates a course', async (scenario: StandardScenario) => {
    const original = await course({ id: scenario.course.one.id })
    const result = await updateCourse({
      id: original.id,
      input: { category: 'String2' },
    })

    expect(result.category).toEqual('String2')
  })

  scenario('deletes a course', async (scenario: StandardScenario) => {
    const original = await deleteCourse({ id: scenario.course.one.id })
    const result = await course({ id: original.id })

    expect(result).toEqual(null)
  })
})
