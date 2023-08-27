    const loadPhone =async () =>{
        const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');

        const data=await res.json();
        const phones=data.data;
        displayPhones(phones)
    }

    const displayPhones=phones =>
    {
        const phoneContainer=document.getElementById('phone-container')
        // console.log(phones);
       phones.forEach(phone => {

        console.log(phone);
        //2.create a div
        const phoneCard=document.createElement('div');

        phoneCard.classList=` card w-96 bg-base-100 shadow-xl`
        //3.set inner html
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-accent text-white">Buy Now</button>
            </div>
        </div>
        </div>
        
        `
        //4.appned child
        phoneContainer.appendChild(phoneCard)
      
       })
    }

    //
    const handleSearch = () =>{
        const searchField=document.getElementById('search-Field');
       const searchText= searchField.value;
       console.log(searchText);
    }








    loadPhone()

    



    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res =>res.json())
    // .then(data => LoadPhone(data) )

    // function LoadPhone(data)
    // {
    //     console.log(data.data);
    // }