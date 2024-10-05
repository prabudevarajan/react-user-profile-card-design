const userData = [
    {
        name:"Prabu",
        city:"Kovai",
        des:"User interface designer",
        skills:["UI / UX", "Figma","Adobe XD","Photoshop","HTML", "CSS" ,"JavaScript" ],
        online: false,
        profileimg:"https://i.pinimg.com/564x/ae/9b/ae/ae9bae263ed27be66a775eff13e603c5.jpg",
    },
    {
        name:"Deverajan",
        city:"Namakkal",
        des:"Frontend Development",
        skills:["UI / UX", "Frontend Development","HTML", "CSS" ,"JavaScript", "React" ,"Node" ],
        online: true,
        profileimg:"https://i.pinimg.com/564x/ae/9b/ae/ae9bae263ed27be66a775eff13e603c5.jpg",
    },
    {
        name:"Rajan",
        city:"Salem",
        des:"Backend Development",
        skills:["UI / UX", "Frontend Development","HTML", "CSS" ,"JavaScript", "React" ,"Node" ],
        online: false,
        profileimg:"https://i.pinimg.com/564x/ae/9b/ae/ae9bae263ed27be66a775eff13e603c5.jpg",
    },
    
]


function UserCard(props){
    return(
        <div className="profilebody">
<div className="card-container">
  <span className={props.online ? "pro online": "pro offline"}>
    {props.online ? "Online" : "Offline"}</span>
  <img
       className="round"
       src={props.profileimg}
       alt="user"
/>
  <h3>{props.name}</h3>
  <h6>{props.place}</h6>
  <p> {props.des} </p>
  <div className="buttons">
    <button className="primary">
      Message
    </button>
    <button className="primary ghost">
      Following
    </button>
  </div>
  <div className="skills">
    <h6>Skills</h6>
    <ul>
     {props.skills.map((skill, index)=>(
        <li key={index}> {skill} </li>
     ))}
     </ul>
  </div>
</div>
 
  
        </div>
    )
}



export const ProfilePage =() =>{
    return (
        <>
        {userData.map((user, index)=>(
            <UserCard key={index} name={user.name} city={user.city} des={user.des} online={user.online}
            profileimg={user.profileimg} skills={user.skills} />
        ))}

        </>
    )
};

{/* <UserCard name="Prabu" place="Namakkal" des="User interface designer"      
        skills={["UI / UX", "Frontend Development","HTML", "CSS" ,"JavaScript", "React" ,"Node" ]} 
        online={true} profileimg= {'https://randomuser.me/api/portraits/women/79.jpg'} /> */}
