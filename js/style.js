    const loadPhone =async (searchText='apple') =>{
        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

        const data=await res.json();
        const phones=data.data;
        displayPhones(phones)
    }

    const displayPhones=phones =>
    {
        const phoneContainer=document.getElementById('phone-container')
        
        //clear phone container
        phoneContainer.textContent='';

        //
        // phones=phones.slice(0,3)
        
        // console.log(phones);
       phones.forEach(phone => {

        // console.log(phone);
        //2.create a div
        const phoneCard=document.createElement('div');

        phoneCard.classList=` card w-96 bg-base-100 shadow-xl`
        //3.set inner html
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${phone.slug}');ShowDetailsModal.showModal()" class="btn btn-accent text-white">Show Details</button>
            </div>
        </div>
        </div>
        
        `
        //4.appned child
        phoneContainer.appendChild(phoneCard)
      
       })
       //hide loading
       toggleLoading(false);
    }

    //
    const handleSearch = () =>{
        //
        toggleLoading(true);




        const searchField=document.getElementById('search-Field');
       const searchText= searchField.value;
       console.log(searchText);
       loadPhone(searchText);
    }

    const toggleLoading =(isLoading) =>{
        const loading=document.getElementById('loading');
        if(isLoading)
        {
            loading.classList.remove('hidden')
        }
        else
        {
            loading.classList.add('hidden')
        }
    }

//show details handle
    const handleShowDetails = async (id) =>
    {
        // console.log('click',id);
        const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        const data=await res.json();
     
        const phone =data.data;
        showPhoneDetails(phone)
    }

//
const showPhoneDetails =(phone)=>
{
    const phoneName=document.getElementById('phone name')
    // phoneName.innerText=phone.name;
    console.log(phone);

    const showdetailscontainer=document.getElementById('show-details-container');
    showdetailscontainer.innerHTML=`
        <div class="flex justify-center"> 
        <img class="justify-center" src="${phone.image}" alt ="" />
        </div>
        <p class="text-2xl font-bold"> ${phone.name} </p>  
        <p > <span class=" font-semibold" >Stroage: </span> ${phone?.mainFeatures.storage}</p>  
        <p> <span class=" font-semibold">Display Size: </span> ${phone.mainFeatures.displaySize }</p>  
        <p> <span class=" font-semibold">chipSet : </span> ${phone.mainFeatures.chipSet }</p> 
        <p> <span class=" font-semibold">sensors:</span>${phone.mainFeatures.sensors }  </p>  
        <p> <span class=" font-semibold">storage: </span> ${phone.mainFeatures.storage }</p>  
        <p> <span class=" font-semibold">memory: </span>${phone.mainFeatures.memory } </p>  
        <p> <span class=" font-semibold"> </span>Slug:${phone.slug} </p>  
        <p> <span class=" font-semibold">releaseDate: </span>${phone.releaseDate} </p>  
    `






    ShowDetailsModal.showModal();
}




loadPhone()

    



    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res =>res.json())
    // .then(data => LoadPhone(data) )

    // function LoadPhone(data)
    // {
    //     console.log(data.data);
    // }