import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./login.css"

export function Login(){

    function mobileValidation(){
        var number=document.getElementById("mob_no").value;
        var sp1=document.getElementById("phone");
        var pn=new RegExp (/^[6-9]{1}[0-9]{9}$/);

        if(pn.test(number)){
            sp1.innerHTML=""
        }
        else{
            sp1.style.color="red"
            sp1.style.fontWeight="bold"
            sp1.innerHTML="Invalid"
        }
    }
    
    function passwordValid(){
        var newpass=document.getElementById("password").value;
        var spn=document.getElementById("pass1");
        
        if(newpass.length<=5||newpass.length>=12){
            spn.style.color="red"
            spn.style.fontWeight="bold"
            spn.innerHTML="please use all charactors @ # $% & * max-12 letters "
        }
        else{
            spn.innerHTML=""
        }
    }
    function showPasswordValid(){
        var inputPassword=document.getElementById("password").value;
            if(inputPassword.type==="Password"){
                inputPassword.type="string";
            }
            else{
                inputPassword.type="password";
            }

    }
    function confrimPasswordValid(){
        var repassword=document.getElementById("con_password").value;
        var newPassword=document.getElementById("password").value;
        var alertTxt=document.getElementById("conform password")
        if(newPassword==repassword){
            alertTxt.style.color="green"
            alertTxt.style.fontWeight="bold"
            alertTxt.innerHTML="Matched"
        }
        else{
            alertTxt.style.color="red"
            alertTxt.style.fontWeight="bold"
            alertTxt.innerHTML="Not Matched Try again"

        }

    }
    
    function ageValidation(){
        var age=document.getElementById("dob").value;
        var text=document.getElementById("age_span");
        var dob= new Date(age);
        var today= new Date();
        const year=today.getFullYear() - dob.getFullYear();
        text.innerHTML=year;

    }


    function emailValidation(){
        var userMail=document.getElementById("email").value;
        var alertMsg=document.getElementById("email_text");
        var mailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(mailPattern.test(userMail)){
            alertMsg.innerHTML=""
        }
        else{
            alertMsg.style.color="red"
            alertMsg.style.fontWeight="bold"

            alertMsg.innerHTML="Invalid email address"  
        }
    }
    function submitButton(){
        var userMail=document.getElementById("email").value;
        var age=document.getElementById("dob").value;
        var inputPassword=document.getElementById("password").value;
        var number=document.getElementById("mob_no").value;
        var firstName=document.getElementById("firsleter").value;
        var lastName=document.getElementById("lastName").value
        var fullName=firstName+lastName;
        var full=fullName.toUpperCase();
        alert("My Name : "+full+'\n'+ "Mobile No : " +number +'\n'+
                "DOB : "+ age +'\n'+"Email id :" +userMail + 
                '\n'+"password : " +inputPassword)
            
            
        
        
    }


    return(
        <>
        <div className="container-fluid bg_img row ">
            
                <div className="col-lg-3"></div>
                <div className="col-lg-6 container_div  mt-5 pt-5 mb-5 ">
                        <form onSubmit={submitButton}>
                            <h1 className="text-center font-weight-bold">Sign In Form</h1>
                            <table className="mt-5 mb-5 pt-4">
                                <tr>
                                    <td><label className="font-weight-bold">Name : </label></td>
                                    <td><input type="text" id="firsleter"  placeholder="First Name"  required  className="firstname" /> </td>
                                    <td><input type="text" id="lastName" placeholder="Last Name" className="firstname"/></td>
                                </tr>
                                        <br/>
                                <tr>
                                    <td><label className="font-weight-bold">Mobile No:</label></td>
                                    <td><input type="number" id="mob_no" placeholder="Enter Mobile No" onKeyUp={mobileValidation}  maxLength={10}/></td>
                                    <span id="phone"></span>
                                    <td></td>
                                </tr>
                                        <br/>
                                <tr>
                                    <td><label className="font-weight-bold">Gender</label></td>
                                    <td><input type="radio" id="male"  name="Gender" value={"Male"}/>Male </td>
                                    <td><input type="radio" id="male"  name="Gender" value={"FeMale"}/>Female </td>
                                </tr>
                                        <br/>
                                <tr>
                                    <td><label className="font-weight-bold">DOB</label></td>
                                    <td><input type="date" id="dob" name="dob" onChange={ageValidation} /> </td>
                                    <td><label id="age" className="font-weight-bold" >AGE : <span id="age_span" className="text-primary"></span ></label></td>
                                </tr>
                                        <br/>
                                <tr>
                                    <td><label className="font-weight-bold">Email</label></td>
                                    <td><input type="email" id="email" placeholder="Enter your email" onKeyUp={emailValidation}/></td>
                                    <span id="email_text"></span>
                                </tr>
                                        <br/>                                
                                <tr>
                                    <td><label className="font-weight-bold">New Password :</label></td>
                                    <td><input type="password" id="password" placeholder="Set Password" onKeyUp={passwordValid}/></td>
                                    <span id="pass1"></span> <br/>
                                    <td><input type="checkbox"id="showpassword" name="showpassword" value="" onClick={showPasswordValid}/>ShowPassword </td>
                                </tr>
                                    <br/>
                                <tr>
                                    <td><label className="font-weight-bold">Confirm Password :</label></td>
                                    <td><input type="password" id="con_password" placeholder="Re Enter Password" onKeyUp={confrimPasswordValid} /></td>
                                    <span id="conform password"></span>
                                </tr>
                                    <br/>
                                <tr>
                                    <td><label className="font-weight-bold">Distric :</label></td>
                                    <td><select>
                                        <option value="">select</option>
                                        <option value="Ariyalur">Ariyalur</option>
                                        <option value="Chengalpattu">Chengalpattu</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Coimbatore">Coimbatore</option>
                                        <option value="Cuddalore">Cuddalore</option>
                                        <option value="Dharmapuri">Dharmapuri</option>
                                        <option value="Dindigul">Dindigul</option>
                                        <option value="Erode">Erode</option>
                                        <option value="Kallakurichi">Kallakurichi</option>
                                        <option value="Kancheepuram">Kancheepuram</option>
                                        <option value="Karur">Karur</option>
                                        <option value="Krishnagiri">Krishnagiri</option>
                                        <option value="Madurai">Madurai</option>
                                        <option value="Mayiladuthurai">Mayiladuthurai</option>
                                        <option value="Nagapattinam">Nagapattinam</option>
                                        <option value="Kanniyakumari">Kanniyakumari</option>
                                        <option value="Namakkal">Namakkal</option>
                                        <option value="Ariyalur">Ariyalur</option>
                                        <option value="Perambalur">Perambalur</option>
                                        <option value="Pudukottai">Pudukottai</option>
                                        <option value="Ramanathapuram">Ramanathapuram</option>
                                        <option value="Ranipet">Ranipet</option>
                                        <option value="Salem">Salem</option>
                                        <option value="Sivagangai">Sivagangai</option>
                                        <option value="Tenkasi">Tenkasi</option>
                                        <option value="Thanjavur">Thanjavur</option>
                                        <option value="Theni">Theni</option>
                                        <option value="Thiruvallur">Thiruvallur</option>
                                        <option value="Thiruvarur">Thiruvarur</option>
                                        <option value="Thoothukudi">Thoothukudi</option>
                                        <option value="Trichirappalli">Trichirappalli</option>
                                        <option value="Thirunelveli">Thirunelveli</option>
                                        <option value="Tirupathur">Tirupathur</option>
                                        <option value="Tiruppur">Tiruppur</option>
                                        <option value="Tiruvannamalai">Tiruvannamalai</option>
                                        <option value="The Nilgiris">The Nilgiris</option>
                                        <option value="Vellore">Vellore</option>
                                        <option value="Viluppuram">Viluppuram</option>
                                        <option value="Virudhunagar">Virudhunagar</option>                                     
                                        </select></td>
                                </tr>
                                        <br/>
                                <tr>
                                    <td></td>
                                    <td><input type="button" id="subbtn" onClick={submitButton} className="ml-5 btn btn-warning text-primary font-weight-bold" value="Submit"/></td>
                                </tr>
                                
                            </table>
                            

                        </form>

                </div>
                <div className="col-lg-3"></div>

            
        </div>
        </>
    )
}

