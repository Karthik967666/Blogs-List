import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const renderBlogsList = () =>
  blogsList.map(each => (
    <li>
      <div className="d-flex flex-row justify-content-between">
        <h1 className="bold">{each.title}</h1>
        <p>{each.publishedDate}</p>
      </div>
      <p>{each.description}</p>
      <hr />
    </li>
  ))
const Home = () => (
  <div className="home-container">
    <div className="text-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1>Wade Warren</h1>
      <p>Software Developer at UK</p>
    </div>
    <ul className="list">{renderBlogsList()}</ul>
  </div>
)

export default Home
