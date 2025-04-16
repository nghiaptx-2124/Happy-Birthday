// Add this at the beginning of the file
window.addEventListener('load', function() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5;
    audio.play().catch(error => {
        console.log("Auto-play failed:", error);
    });
});

const audio = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const wishesContainer = document.getElementById('wishesContainer');

// Function to handle audio play
function playAudio() {
    audio.volume = 0.5;
    audio.play().then(() => {
        musicToggle.textContent = '🔇 Mute Music';
    }).catch((error) => {
        console.log('Playback failed:', error);
        musicToggle.textContent = '🎵 Play Music';
    });
}

// Music control
musicToggle.addEventListener('click', () => {
    if (audio.paused) {
        playAudio();
    } else {
        audio.pause();
        musicToggle.textContent = '🎵 Play Music';
    }
});

// Try to play when user interacts with the page
document.body.addEventListener('click', function() {
    if (audio.paused) {
        playAudio();
    }
}, { once: true });

// Create cherry blossom petals
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Random starting position and movement
    const startX = Math.random() * window.innerWidth;
    const rotation = Math.random() * 360;
    const scale = 0.5 + Math.random() * 0.5;
    
    petal.style.cssText = `
        left: ${startX}px;
        top: -50px;
        transform: rotate(${rotation}deg) scale(${scale});
        animation: falling ${5 + Math.random() * 5}s linear infinite;
    `;
    
    // Randomize between different petal types
    const petalTypes = ['🌸', '🎀', '💮'];
    petal.innerHTML = petalTypes[Math.floor(Math.random() * petalTypes.length)];
    petal.style.fontSize = (15 + Math.random() * 10) + 'px';
    petal.style.opacity = 0.6 + Math.random() * 0.4;
    
    document.body.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
        petal.remove();
    }, 10000);
}

// Create more petals for a denser effect
setInterval(createPetal, 200);

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes falling {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, 50vh) rotate(180deg) scale(0.8);
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, 100vh) rotate(360deg) scale(0.6);
        }
    }
`;
document.head.appendChild(style);

// Birthday wishes array with corresponding images
const birthdayWishes = [
    {
        text: "Chúc em sinh nhật vui vẻ, có thật nhiều niềm vui hơn và ý nghĩa hơn nữa. Chúc em sẽ tìm thấy thêm nhiều niềm đam mê mới ngoài công việc, cố gắng về sớm để tận hưởng thêm nhiều niềm vui khác nhó.🎈",
        image: "partner/0.jpeg"
    },
    {
        text: "Hi mofumofu :waiwai:\nChúc mừng tuổi mới iemmmm, vừa có sự nghiêp, vừa có ngừi iu, ngừi iu thì tặng lun cái bịch shoppe ko gói, đồng nghịp thì cợt nhã mũi ngày, hở cái thì bịnh tật triền miên, đúng là hên lắm mới xui được như em :)))\nNói chớ thấy em đi làm đam mê zui zẻ hầu hạ khách khứa mỗi ngày, mọi người mí anh chị trong dự án (ý là a Nghĩa, c Ngọc, a Tún đồ đó), gồi mí anh chị đã rời dự án, chú En, chú bé Hả, em gái Thảo đồ, ai cũng quý mến zà iu thưn em hết mực nên c ga đi c cũng in lòng đôi chút :))\nChúc cho em gái c tuổi mới thật là rực rỡ, luôn hết mình & thiệt hạnh phúc trong mọi khoảnh khắc, work smarter & play harder (do work hard rồi nên ko chúc hard hơn được nè) .\nChúc em gái c có kháng sinh vững vàng, để xinh đẹp mạnh khoẻ để ăn đc nhìu món ngon mà hong bị rối loạn tiu hoá, tâm vững để hong bị chớm muộn phiền vì vài ba lời của khách hàng, sức vững để tái nạm vứi chị và cày thêm nhìu coan dự án mứi nhennnn\nいつもありがとう！ Lò vé diu, bé Chiu :heart:🌟",
        image: "partner/1.png"
    },
    {
        text: "Mới đấy mà đã làm chung với em được gần 2 năm, từ 1 bạn Comtor ngày nào chập chững nay đã trưởng thành và can trường hơn lúc đầu. 🎉 \n Cảm ơn em trong thời gian qua đã support team tận tình, không quản ngại giờ giấc, không nề hà bẩt cứ ai. \n Tuổi mới chúc em một đời bình an, sống trong ánh sáng của 10 phương chư Phật nhá. \nP/s: Cho anh Remote nhá ✨",
        image: "partner/2.png"
    },
    {
        text: "Qua tuổi mới chúc em có nhiều sức khỏe, gặp nhiều may mắn, thành công trong cuộc sống và cũng cảm ơn vì em đã luôn làm việc thật chăm chỉ, có trách nhiệm, nổ lực hết mình vì dự án.\nAnh có 2 phần pate, 1 phần tặng cho mèo của em và 1 phần tặng cho em 😁",
        image: "partner/3.png"
    },
    {
        text: "✨Happy Birthday \"Nữ thần ngôn ngữ\" nhà ta ✨\nChúc mừng sinh nhật cô nàng xinh xắn, nhỏ nhẹ như làn gió đầu xuân, dịu keo như sương sớm và khéo léo như ninja (Nhanh nhẹn, linh hoạt, âm thầm mà hiệu quả cao) phiên dịch 😎✨\nHôm nay là ngày đặc biệt của chị em comtor có tiếng \"dịch 1 được 10\", vừa giỏi chuyên môn lại vừa được lòng toàn dân văn phòng – từ dev tới sếp, ai cũng mê!\nNhân dịp thêm tuổi mới:\nChúc nhan sắc thăng hạng mỗi ngày, đẹp như filter TikTok mà không cần app 📱💁‍♀️\nSức khỏe dồi dào như deadline cuối tháng – tới tấp mà vẫn \"sống khỏe\" 💪☘️\nTiền tài ào ào như bug spec – nhưng lần này là bug rớt tiền 💸💸\nDanh vọng bay xa như bản dịch mượt mà không sai dấu chấm phẩy 📝☀️\nChúc ngày hôm nay chị đẹp cười mỏi miệng vì quà, và năm nay là năm bung lụa, sống hết mình, vui hết nấc 🎁🎂✨\n— Tập thể fan hâm mộ âm thầm nhưng không giấu nổi sự ngưỡng mộ ",
        image: "partner/4.jpeg"
    },
    {
        text: "Hello c Phưn, lâu quá cuối cùng cũng tới sinh nhật rùi nè\nChúc c tuổi mới thăng hạng về nhan sắc, nâng cấp trong sự nghiệp, ngọt ngào ngọt ngào dí tìn iu. Chúc c thêm nhìu sức phẻ để tiếp tục dí đam mê, mà c cũng nhớ tự chăm sóc bản thân để phẻ phắn mạnh mẽ hơn nhaaa, c hong nhớ thì nhắc a nhà nhớ nhắc c thường xuyên dùm e ạ.\nHappy birthday c pằng chíu chíuuu 🥰 ",
        image: "partner/5.png"
    },
    {
        text: "Happy Birthday to someone who brings light to everyone's life! May your day be as bright and beautiful as your smile. Wishing you endless joy and success! 🎂",
        image: "partner/6.png"
    },
    {
        text: "Hello Phưn cưng, lâu quá cuối cùng cũng tới sinh nhật rùi nè\nChúc cưng tuổi mới thăng hạng về nhan sắc, nâng cấp trong sự nghiệp, ngọt ngào ngọt ngào dí tìn iu. Chúc cưng thêm nhìu sức phẻ để tiếp tục dí đam mê, mà cưng cũng nhớ tự chăm sóc bản thân để phẻ phắn mạnh mẽ hơn nhaaa, cưng hong nhớ thì nhắc Lem Vĩnh Long nhắc cưng thường xuyên dùm nha ạ.\nHappy birthday cưng love you chụp chụp 🥰 🥰 🥰 ",
        image: "partner/7.jpeg"
    },
    {
        text: "Chúc mừng sinh nhật em! \n Luôn xinh đẹp luôn yêu đời và luôn tràn đầy năng lượng để hoàn thành xuất sắc công việc cũng như có thời gian chăm sóc bản thân và chăm sóc Lâm Lâm! \n Thêm tuổi mới thêm niềm vui mới, thêm hạnh phúc mới và thêm nhiều hoài bão mới. \n Chúc em hoàn thành tất cả các ước mơ của mình nhé. 🥰 ",
        image: "partner/8.jpeg"
    },
    {
        text: "Hôm nay sinh nhật đến rồi,\nChúc chị vui vẻ, rạng ngời như hoa.\nThông minh, duyên dáng thật thà,\nViệc gì cũng giỏi, mọi nhà đều khen!\nXinh xắn lại rất dễ thương,\nNhiệt tình công việc, chẳng vương nỗi buồn.\nTươi cười rạng rỡ mỗi hôm,\nMang theo năng lượng tỏa tròn khắp nơi.\nChúc chị tuổi mới tuyệt vời,\nSức khỏe dồi dào, thảnh thơi an lành.\nTình duyên như ý ngọt lành,\nCông danh tiến bước, lộc quanh suốt đời. 🥰 ",
        image: "partner/9.png"
    },
    {
        text: "Chúc mừng sinh nhật em! 🎉🎂\nAnh muốn gửi đến em những lời chúc tốt đẹp nhất trong ngày đặc biệt này. Tuy thời gian chúng ta làm việc cùng nhau chưa dài, nhưng em đã để lại trong anh rất nhiều ấn tượng sâu sắc. Từ cách em tiếp cận công việc, sự chủ động, tinh thần trách nhiệm cao đến thái độ tích cực và tinh tế trong giao tiếp – tất cả đều thể hiện em là một người rất đáng quý và chuyên nghiệp.\n\nAnh thật sự cảm thấy may mắn khi có cơ hội được cộng tác cùng em, dù chỉ trong một khoảng thời gian ngắn. Em đã truyền cảm hứng và tạo nên một bầu không khí làm việc rất dễ chịu, hiệu quả và đáng nhớ.\n\nAnh chúc em luôn giữ được ngọn lửa đam mê với công việc, luôn hạnh phúc với những gì mình đang làm và gặt hái thật nhiều thành công trên con đường phía trước. Chúc em có một tuổi mới tràn đầy sức khỏe, niềm vui, và luôn được bao quanh bởi những người yêu thương, trân trọng em.\n\nMong rằng trong tương lai không xa, chúng ta sẽ lại có thêm cơ hội để tiếp tục làm việc cùng nhau, học hỏi lẫn nhau và cùng tạo nên những điều ý nghĩa hơn nữa.\nMột lần nữa, chúc em sinh nhật thật vui vẻ và trọn vẹn nhé! 🌟",
        image: "partner/10.png"
    }
];

// Create wish cards
function createWishCards() {
    let currentExpanded = null;

    birthdayWishes.forEach((wish, index) => {
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        
        const content = document.createElement('div');
        content.className = 'wish-card-content';
        
        const img = document.createElement('img');
        img.src = wish.image;
        img.className = 'wish-card-image';
        img.alt = `Birthday wish ${index + 1}`;
        
        const text = document.createElement('div');
        text.className = 'wish-text';
        text.innerHTML = wish.text.replace(/\n/g, '<br>');
        
        content.appendChild(img);
        content.appendChild(text);
        wishCard.appendChild(content);
        
        // Hover handlers
        wishCard.addEventListener('mouseenter', () => {
            if (currentExpanded) {
                currentExpanded.classList.remove('expanded');
            }
            wishCard.classList.add('expanded');
            currentExpanded = wishCard;
        });

        wishesContainer.appendChild(wishCard);
    });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createWishCards();
    playAudio();
});