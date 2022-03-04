// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MembersLayout from 'src/layouts/MembersLayout'
import CoursesLayout from 'src/layouts/CoursesLayout'
import AdministrationLayout from './layouts/AdministrationLayout/AdministrationLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/courselist" page={CourselistPage} name="courselist" />
      <Route path="/list" page={AboutPage} name="about" />
      <Set wrap={MembersLayout}>
        <Route path="/members/new" page={MemberNewMemberPage} name="newMember" />
        <Route path="/members/{id}/edit" page={MemberEditMemberPage} name="editMember" />
        <Route path="/members/{id}" page={MemberMemberPage} name="member" />
        <Route path="/members" page={MemberMembersPage} name="members" />
      </Set>
      <Set wrap={CoursesLayout}>
        <Route path="/courses/new" page={CourseNewCoursePage} name="newCourse" />
        <Route path="/courses/{id}/edit" page={CourseEditCoursePage} name="editCourse" />
        <Route path="/courses/{id}" page={CourseCoursePage} name="course" />
        <Route path="/courses" page={CourseCoursesPage} name="courses" />
      </Set>
      <Set wrap={AdministrationLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
