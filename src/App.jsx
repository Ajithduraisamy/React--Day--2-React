import './App.css'
import Card from './Card'

function App() {
  let obj=[ 
  {
    pretitle: "FREE",
    title: "$0/month",
    merits:
    [
    {
    name: "Single user",
    enabled:true
    },
    {
      name:"50gb storage",
      enabled:true
    },
    {
      name:"unlimited public projects",
      enabled:true
    },
    {
      name:"Comunity access",
      enabled:true
    },
    {
      name:"Unlimted private projects",
      enabled:false
    },
    {
      name:"Dedicated phone support",
      enabled:false
    },
    {
      name:"Free Subdomain",
      enabled:false
    },
    {
      name:"Monthly status reoprt",
      enabled:false
    }
    ],
    buttonName: "Sign up for free",
    buttonFocus: false,
  },
  {
    pretitle: "PLUS",
    title: "$9/month",
    merits:
    [
    {
    name: "5 user",
    enabled:true
    },
    {
      name:"50gb storage",
      enabled:true
    },
    {
      name:"unlimited public projects",
      enabled:true
    },
    {
      name:"Comunity access",
      enabled:true
    },
    {
      name:"Unlimted private projects",
      enabled:true
    },
    {
      name:"Dedicated phone support",
      enabled:true
    },
    {
      name:"Free Subdomain",
      enabled:true
    },
    {
      name:"Monthly status reoprt",
      enabled:false
    }
    ],
    buttonName: "Sign up for plus",
    buttonFocus: false
  },
  {
    pretitle: "PRO",
    title: "$49/month",
    merits:
    [
    {
    name: "Unlimited user",
    enabled:true
    },
    {
      name:"50gb storage",
      enabled:true
    },
    {
      name:"unlimited public projects",
      enabled:true
    },
    {
      name:"Comunity access",
      enabled:true
    },
    {
      name:"Unlimted private projects",
      enabled:true
    },
    {
      name:"Dedicated phone support",
      enabled:true
    },
    {
      name:"Free Subdomain",
      enabled:true
    },
    {
      name:"Monthly status reoprt",
      enabled:true
    }
    ],
    buttonName: "Sign up for pro",
    buttonFocus: true
  }
]
  return (
          <div className="container">
            <div className="row">
                  {
                    obj.map((ele, index)=>{
                      return <Card key={index} data={ele}/>
                      })
                    }
            </div>
          </div>
  )
}

export default App
