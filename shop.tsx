import React, { useState } from 'react';

const CyberGearShop =() => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const products =[
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 129.99,
      rating: 4.5,
      reviewCount: 124,
      description: 'Premium wireless gaming headphones with crystal clear sound and noise cancellation.',
      specs: [
        { label: 'Connectivity', value: 'Bluetooth 5.0' },
        { label: 'Battery Life', value: '30+ hours '},
        { label: 'Weight', value:'250g'},
        { label: 'Color', value: 'Green & Black'}
      ],
      reviews: [
        { id: 1, author: 'Wade R.', rating: 5, date: '2 weeks ago', title: 'Amazing Quality!', text: 'The sound quality is incredible and very comfortable for long gaming sessions.'},
        { id: 2, author: 'Hector M.', rating: 4, date: '1 month ago', title: 'Great value for money', text: 'Good build quality. Mic could be better, but overall very happy with purchase.'},
        { id: 3, author: ' Knoxx M.', rating: 5, date: '1 month ago', title: 'Perfect for gaming', text: 'Low latency, great bass, and the microphone is crisp. Highly recommend!'},
        { id: 4, author: 'Jayden C.', rating: '4', date: '2 months ago', title: 'Very comfortable', text: 'Wore them for 8 hours straight, no discomfort. Battery lasts forever. '}
      ]
    },
    {
      id: 2,
      name: 'Gaming Monitor',
      price: 199.00,
      rating: 4.7,
      reviewCount: 89,
      description: '144Hz gaming monitor with HDR support and ultra-fast response time.',
      specs: [
        { label: 'Resolution', value: '1920x1080'},
        { label: 'Refresh Rate', value: '144Hz'},
        { label: 'Response Time', value: '1ms'},
        { label: 'Panel', value: 'IPS'}
      ],
      reviews: [
        { id: 1, author: 'Percival R.', rating: 5, date: '3 weeks ago', title: 'Buttery smooth gameplay', text: 'The 144Hz refresh rate is insane. No more screen tearing and gameplay feels so fluid.'},
        { id: 2, author: 'Riley P.', rating: 5, date: '1 month ago', title:'Best monitor I own', text: 'Colors are vibrant, response time is instant. Perfect for competitive FPS games.'},
        { id: 3, author: 'Alonzo S.', rating: 4, date: '6 weeks ago', title: 'Great build quality', text: 'very solid stand, good color accuracy. Slightly pricey but worth every penny.'},
        { id: 4, author: 'Blake R.', rating: 4, date: '2 months ago', title: 'Upgrade worthy', text: 'Huge improvement from my old monitor. Gaming looks completely different now.' }
      ]
    },
    {
      id: 3, 
      name: 'Mechanical Keyboard',
      price: 89.50,
      rating: 4.6,
      reviewCount: 156,
      description: 'RGB mechanical keyboard with custom switches and programmable keys.',
      specs: [
        { label: 'Switch Type', value: 'Blue Mechanical'},
        { label: 'Backlighting', value: 'RGB'},
        { label: 'Layout', value: 'Full Size'},
        { label: 'Connectivity', value: 'USB'}
      ],
      reviews: [
        { id: 1, author: 'Taylor N.', rating: 5, date: '1 week ago', title: 'Satisfying clicks', text: 'Love the mechanical feel. Each keystroke feels responsive and the RGB is customizable.' },
        { id: 2, author: 'Avery S.', rating: 5, date: '2 weeks ago', title: 'Built to last', text: 'Premium build quality. Keys feel smooth and don\'t get stuck. Highly durable.' },
        { id: 3, author: 'Quinn L.', rating: 4, date: '1 month ago', title: 'Great typing experience', text: 'Excellent for gaming and typing. A bit loud but that\'s expected with mechanical switches.' },
        { id: 4, author: 'Jamie H.', rating: 4, date: '6 weeks ago', title: 'Worth the investment', text: 'Upgraded from membrane keyboard and I\'ll never go back. Typing is so much better.' }
      ]
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 59.99,
      rating: 4.4,
      reviewCount: 203,
      description: 'Precision gaming mouse with adjustable DPI and ergonomic design.',
      specs: [
          { label: 'DPI Range', value: '400-16000' },
        { label: 'Polling Rate', value: '1000Hz' },
        { label: 'Buttons', value: '7 Programmable' },
        { label: 'Weight', value: '85g' }
      ],
      reviews: [
        { id: 1, author: 'Chris D.', rating: 5, date: '10 days ago', title: 'Precision gaming', text: 'Incredible accuracy for FPS games. DPI adjustment is smooth and responsive.' },
        { id: 2, author: 'Jordan V.', rating: 4, date: '3 weeks ago', title: 'Comfortable grip', text: 'Ergonomic design is great for long gaming sessions. Buttons feel clicky and responsive.' },
        { id: 3, author: 'Morgan B.', rating: 4, date: '1 month ago', title: 'Solid build', text: 'Good balance between price and performance. Cable is a bit stiff but manageable.' },
        { id: 4, author: 'Casey J.', rating: 4, date: '6 weeks ago', title: 'Great for gaming', text: 'Fast tracking, no lag, perfect for competitive gaming. Highly recommend.' }
      ]
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 79.99,
      rating: 4.3,
      reviewCount: 67,
      description: 'Portable Bluetooth speaker with 360° sound and waterproof design.',
      specs: [
         { label: 'Battery Life', value: '12 hours' },
        { label: 'Waterproof', value: 'IPX7' },
        { label: 'Sound', value: '360° Coverage' },
        { label: 'Connectivity', value: 'Bluetooth 5.0' }
      ],
      reviews: [
        { id: 1, author: 'Alex W.', rating: 5, date: '2 weeks ago', title: 'Sounds amazing', text: 'Bass is deep and clear. Works great at parties and outdoor gatherings.' },
        { id: 2, author: 'Ryan T.', rating: 4, date: '1 month ago', title: 'Portability and power', text: 'Compact size but delivers big sound. Waterproof is a plus for beach trips.' },
        { id: 3, author: 'Sam C.', rating: 4, date: '6 weeks ago', title: 'Good all-rounder', text: 'Battery lasts long, sound quality is solid. Perfect for on-the-go use.' },
        { id: 4, author: 'Taylor M.', rating: 4, date: '2 months ago', title: 'Worth buying', text: 'Great speaker for the price. Waterproof feature is very useful.' }
      ]
    },
    {
      id: 6, 
      name: 'Gaming Mouse Pad',
      price: 19.99,
      rating: 4.2,
      reviewCount: 142, 
      description: 'Large RGB gaming mouse pad with non-slip base and smooth surface.',
      specs: [ 
         { label: 'Size', value: '900x400mm' },
        { label: 'Backlighting', value: 'RGB' },
        { label: 'Base', value: 'Non-Slip Rubber' },
        { label: 'Material', value: 'Cloth' }
      ],
      reviews: [
        { id: 1, author: 'Jordan P.', rating: 5, date: '1 week ago', title: 'Perfect mousepad', text: 'Large size gives plenty of space. RGB looks sick and mouse glides smoothly.' },
        { id: 2, author: 'Casey R.', rating: 4, date: '2 weeks ago', title: 'Great value', text: 'Good build quality, doesn\'t slip around. RGB customization is nice.' },
        { id: 3, author: 'Morgan L.', rating: 4, date: '1 month ago', title: 'Highly recommend', text: 'Smooth surface for accurate mouse movements. Stitched edges are durable.' },
        { id: 4, author: 'Riley K.', rating: 4, date: '6 weeks ago', title: 'Best mousepad for gaming', text: 'Improves my aim noticeably. Size is generous and build is solid.' }
      ]
    },
    {
      id: 7, 
      name: 'Nintendo Switch',
      price: 299.99,
      rating: 4.8,
      reviewCount: 234,
      description: 'Nintendo Switch gaming console with detachable controllers and dockable design.',
      specs: [
         { label: 'Display', value: '6.2" LCD' },
        { label: 'Storage', value: '32GB Internal' },
        { label: 'Battery', value: '6.5 hours' },
        { label: 'Connectivity', value: 'WiFi & Bluetooth' }
      ],
      reviews: [
        { id: 1, author: 'Drew S.', rating: 5, date: '1 week ago', title: 'Amazing console', text: 'So versatile - play on TV, as a tablet, or handheld. Game library is huge.' },
        { id: 2, author: 'Blake T.', rating: 5, date: '2 weeks ago', title: 'Best gaming investment', text: 'Quality games available. Can play anywhere. Family and friends love it.' },
        { id: 3, author: 'Quinn M.', rating: 5, date: '1 month ago', title: 'Fantastic experience', text: 'Build quality is excellent. Controllers feel great. Highly recommend.' },
        { id: 4, author: 'Jamie N.', rating: 4, date: '6 weeks ago', title: 'Portable gaming perfection', text: 'Great for travel. Battery life could be better but overall amazing console.' }
      ]
    },
    {
      id: 8, 
      name: 'PS5 Console',
      price: 499.99,
      rating: 4.9,
      reviewCount: 312, 
      description: 'PlayStation 5 next-gen console with 4K gaming and ultra-fast SSD.',
      specs: [
          { label: 'GPU', value: '10.28 TFLOPS' },
        { label: 'Storage', value: '825GB SSD' },
        { label: 'Resolution', value: '4K @ 120Hz' },
        { label: 'Backward Compat', value: 'PS4 Games' }
      ],
      reviews: [
        { id: 1, author: 'Avery H.', rating: 5, date: '3 days ago', title: 'Next-gen perfection', text: 'Graphics are mind-blowing. Load times are instant. This is the future of gaming.' },
        { id: 2, author: 'Chris L.', rating: 5, date: '1 week ago', title: 'Outstanding performance', text: 'Games run at 60fps beautifully. 4K visuals are stunning. Worth every penny.' },
        { id: 3, author: 'Ryan P.', rating: 5, date: '2 weeks ago', title: 'Best console ever', text: 'Exclusive games are incredible. Controller features are innovative. Highly impressed.' },
        { id: 4, author: 'Sam N.', rating: 4, date: '1 month ago', title: 'Gaming powerhouse', text: 'Massive upgrade from PS4. Performance is incredible. Only downside is hard to find in stock.' }
      ]
    }

  ];
  
}


export default CyberGearShop;