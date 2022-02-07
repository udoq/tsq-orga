import {
  members,
  member,
  createMember,
  updateMember,
  deleteMember,
} from './members'
import type { StandardScenario } from './members.scenarios'

describe('members', () => {
  scenario('returns all members', async (scenario: StandardScenario) => {
    const result = await members()

    expect(result.length).toEqual(Object.keys(scenario.member).length)
  })

  scenario('returns a single member', async (scenario: StandardScenario) => {
    const result = await member({ id: scenario.member.one.id })

    expect(result).toEqual(scenario.member.one)
  })

  scenario('creates a member', async () => {
    const result = await createMember({
      input: {
        kd_nr: 3952342,
        first_name: 'String',
        last_name: 'String',
        email: 'String',
      },
    })

    expect(result.kd_nr).toEqual(3952342)
    expect(result.first_name).toEqual('String')
    expect(result.last_name).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a member', async (scenario: StandardScenario) => {
    const original = await member({ id: scenario.member.one.id })
    const result = await updateMember({
      id: original.id,
      input: { kd_nr: 3748779 },
    })

    expect(result.kd_nr).toEqual(3748779)
  })

  scenario('deletes a member', async (scenario: StandardScenario) => {
    const original = await deleteMember({ id: scenario.member.one.id })
    const result = await member({ id: original.id })

    expect(result).toEqual(null)
  })
})
