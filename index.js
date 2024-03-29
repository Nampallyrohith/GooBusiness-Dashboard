const cards = [
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649310/002-cash.png_xlbd0v.png',
        value: '$9,568.00',
        name: 'Total Balance',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649310/003-credit-card.png_ppv9tf.png',
        value: '60%',
        name: 'Discount Percentage',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649310/001-donation.png_fi8wie.png',
        value: '300',
        name: 'Total Referral',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649310/004-hourglass.png_peuhxd.png',
        value: '$300',
        name: 'Discount Amount',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649311/005-percentage.png_wn0dad.png',
        value: '$158.00',
        name: 'Total Earning',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649311/006-wage.png_rdjqhk.png',
        value: '40%',
        name: 'Commission Discount',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649310/007-referral.png_dasifh.png',
        value: '$9,568.00',
        name: 'Total Balance',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dsfgj9nwd/image/upload/v1711649310/008-transfer.png_spcjqc.png',
        value: '$534.00',
        name: 'Total Bank Transfer',
    }
]

const serviceProvider = [
    {
        Name: 'Pranjal',
        service: 'PM',
        date: "2011/11/28",
        profit: '$162,700'
    },
    {
        Name: 'paritosh',
        service: 'PM',
        date: "2007/10/09",
        profit: '$1,200,000'
    },
    {
        Name: 'palav',
        service: 'B2b',
        date: "2009/01/12",
        profit: '$86,000'
    },
    {
        Name: 'Moumita',
        service: 'HR',
        date: "2012/10/13",
        profit: '$132,000'
    },
    {
        Name: 'Mitesh',
        service: 'Graphics',
        date: "2012/11/28",
        profit: '$162,700'
    },
    {
        Name: 'Srinivas',
        service: 'Frontend',
        date: "2011/11/03",
        profit: '$162,700'
    },
    {
        Name: 'hritik',
        service: 'Graphics',
        date: "2011/12/12",
        profit: '$106,450'
    },
    {
        Name: 'abc',
        service: 'HR',
        date: "2011/11/28",
        profit: '$162,700'
    },
    {
        Name: 'xyz',
        service: 'B2b',
        date: "2011/12/06",
        profit: '$145,600'
    },
    {
        Name: 'bcd',
        service: 'B2b',
        date: "2012/03/29",
        profit: '$433,060'
    },
]


let cardItems = document.getElementById("cardItems");

cards.map(item => {
    let liItem = document.createElement("li");
    let divItem = document.createElement('div');
    divItem.classList.add('div-item')

    let imgLink = document.createElement('img');
    imgLink.src=item.imgUrl;
    imgLink.alt='img link';

    let subDiv = document.createElement('div');
    subDiv.classList.add('sub-div')

    let addValue = document.createElement('p');
    addValue.textContent = item.value;

    let addName = document.createElement('p');
    addName.textContent = item.name;

    
    divItem.appendChild(imgLink);

    subDiv.appendChild(addValue);
    subDiv.appendChild(addName);

    divItem.appendChild(subDiv);

    liItem.appendChild(divItem);

    cardItems.appendChild(liItem);
})


let tableContainer = document.getElementById('tableContainer');

serviceProvider.map(provider => {
    let divRow = document.createElement('div');
    divRow.classList.add('table-row')

    let p1 = document.createElement('p')
    p1.classList.add('table-row-color')
    p1.textContent = provider.Name
    p1.classList.add('table-name')
    let p2 = document.createElement('p')
    p2.classList.add('table-row-color')
    p2.textContent = provider.service
    let p3 = document.createElement('p')
    p3.textContent = provider.date
    p3.classList.add('table-row-color')
    let p4 = document.createElement('p')
    p4.textContent = provider.profit
    p4.classList.add('table-row-color')

    let hrLine = document.createElement('hr')
    hrLine.classList.add('table-line');


    divRow.appendChild(p1);
    divRow.appendChild(p2);
    divRow.appendChild(p3);
    divRow.appendChild(p4);

    tableContainer.appendChild(divRow)
    tableContainer.appendChild(hrLine)

})