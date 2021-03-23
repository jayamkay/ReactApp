import profileCSS from './Profile.module.css';

const Profile = () => {
    return <div className='profile'>
    <div><img className={profileCSS.banner} src='https://sigmetic.io/static/020b7216f1d03de4882b52a9669cbc59/acf8f/react-banner.png'></img></div>
   <div><img className={profileCSS.avatar}src='https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png'></img></div>
   <div className='posts'>My posts
     <div>New post</div>
     <div>
       <div>post1</div>
       <div>post2</div>
       <div>post3</div>
     </div>
     </div>
  </div>
}


export default Profile;