import { useState , useEffect} from "react";
import axios from "axios"
import "./page.css"
const API = "https://searchapp-api.onrender.com";

const SearchAd = () =>{
    const [ad , setAd] = useState([])
    const [search , setSearch] = useState("")
    
    useEffect(()=>{                                                      //On type it will show result
        axios.get(`${API}/api/V8/companyAds?searchItem=${search}`)
        .then((res)=>{
            // console.log(res.data.ads)
            // alert(`${res.data.ads.length} Result found`)
            setAd(res.data.ads)
        })
        .catch((e)=>{
            // console.log(e.message)
            alert(e.message)
        })
    },[search])

    // const handleSearch = (e)=>{  // On Submit it will show result
    //     e.preventDefault()
    //     // console.log(search)
    //     axios.get(`${API}/api/V8/companyAds?searchItem=${search}`)
    //     .then((res)=>{
    //         // console.log(res.data.ads)
    //         alert(`${res.data.ads.length} Result found`)
    //         setAd(res.data.ads)
    //     })
    //     .catch((e)=>{
    //         // console.log(e.message)
    //         alert(e.message)
    //     })
    // }
    
    return(
        <>
        <div className="head">
            <form>
            <input type="text" placeholder="Enter Adv details to search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {/* <button onClick={handleSearch}>Search</button> */}
            </form>
        </div>
        <div className="container">
            {ad?.map((adv)=>(
                <a href={adv.company.url}>
                <div className="figure" key={adv._id}>
                  <div><img src={adv.image} alt="icons"/></div>
                  <div className="data-container">
                            <div className="companyName"><h4>Company Name:</h4><p style={{margin:0,padding:0,fontSize:"24px" }}>{adv.company.name}</p></div>
                            <div className="headline"><h4>HeadLine:</h4>{adv.headline}</div>
                            <div className="primaryText"><h4>PrimaryText:</h4>{adv.primaryText}</div>
                            <div className="description"><h4>Description:</h4>{adv.description}</div>
                        </div>
                </div>
                </a>

            ))}
        </div>
        </>
    )
}

export default SearchAd;