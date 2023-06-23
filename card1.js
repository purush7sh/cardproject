const mockApiResponse = {
    data: [
      {
        name: 'Mixmax',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: {
          value: 100,
          currency: 'SGD'
        },
        available_to_spend: {
          value: 1000,
          currency: 'SGD'
        },
        card_type: 'burner',
        expiry: '9 Feb',
        limit: 100,
        status: 'active'
      },
      {
        name: 'Quickbooks',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: {
          value: 50,
          currency: 'SGD'
        },
        available_to_spend: {
          value: 250,
          currency: 'SGD'
        },
        card_type: 'subscription',
        limit: 10,
        status: 'active'
      }
    ],
    page: 1,
    per_page: 10,
    total: 100
  };
  
  let currentPage = 1;
  let isLoading = false;
  
  function renderCards(cards) {
    const cardList = document.querySelector('.card-list');
  
    cards.forEach(card => {
      const cardItem = document.createElement('div');
      cardItem.className = `card ${card.card_type}`;
  
      const cardType = document.createElement('div');
      cardType.className = 'card-type';
      cardType.innerText = card.card_type.charAt(0).toUpperCase();
      cardItem.appendChild(cardType);
  
      const cardName = document.createElement('h3');
      cardName.innerText = card.name;
      cardItem.appendChild(cardName);
  
      if (card.card_type === 'burner') {
        const expiry = document.createElement('p');
        expiry.innerText = `Expiry: ${card.expiry}`;
        cardItem.appendChild(expiry);
      } else if (card.card_type === 'subscription') {
        const limit = document.createElement('p');
        limit.innerText = `Limit: ${card.limit}`;
        cardItem.appendChild(limit);
      }
  
      cardList.appendChild(cardItem);
    });
  }
  
  function clearCards() {
    const cardList = document.querySelector('.card-list');
    cardList.innerHTML = '';
  }
  
  