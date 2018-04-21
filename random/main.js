const data = {
        'node' :[
        {
            'author': '- Vô danh!',
            'quote':' Tiền xu luôn gây ra tiếng động… nhưng tiền giấy lại luôn im lặng. Vì thế khi giá trị của bạn tăng lên, hãy giữ cho mình luôn khiêm tốn và nói ít đi!'
        },
        {
            'author': '- Vô danh!',
            'quote':'Thành công lớn nhất là đứng dậy sau mỗi lần bị vấp ngã!'
        },
        {
            'author': '- Vô danh!',
            'quote':'Đừng bao giờ cố giải thích con người bạn với bất cứ ai. Vì những người tin bạn không cần điều đó còn những người không thích bạn sẽ không tin lời bạn đâu!'
        },
        {
            'author': '– Alexander Solshenitsen',
            'quote':' Càng nói ít, càng nghe được nhiều.'
        },
        {
            'author': '- Vô danh!',
            'quote':' Khi người khác hỏi những điều mà bạn không muốn trả lời, xin hãy cười và nói “tại sao bạn lại muốn biết điều đó?”'
        },
        {
            'author': '- Vô danh!',
            'quote':' Không ai cần đến một nụ cười nhiều như người không thể cho đi nụ cười.'
        },
        {
            'author': ' – Doris M. Smith',
            'quote':'Tranh cãi với một kẻ ngốc sẽ chứng minh rằng có hai kẻ ngốc.'
        },
        {
            'author': ' – Madonna',
            'quote':' Rất nhiều người không dám nói lên những gì họ muốn. Đó là lý do tại sao họ không có được chúng.'
        },
        {
            'author': ' – Andrew Carnegie',
            'quote':'Khi trưởng thành, tôi ngày càng ít quan tâm đến những gì mọi người nói. Tôi chỉ xem những gì họ làm được.'
        },
        {
            'author': '– Albert Schweitzer',
            'quote':'Kiên trì làm việc tốt sẽ mang lại nhiều thứ. Như mặt trời có thể làm tan băng, lòng tốt có thể làm bốc hơi sự hiểu lầm, hoài nghi và thù địch.'
        },
        {
            'author': '- Vô danh!',
            'quote':'Cuộc sống giống như một cuốn sách. Một vài chương khá buồn, một số chương hạnh phúc và một số chương rất thú vị. Nhưng nếu bạn chưa bao giờ lật thử một trang bạn sẽ không bao giờ biết được những gì ở chương tiếp theo!'
        },
        {
            'author': ' – Dale Carnegie',
            'quote':' Bạn có thể kết bạn được nhiều hơn trong vòng hai tháng bằng cách quan tâm đến người khác hơn là hai năm cố gắng bắt người khác quan tâm đến bạn.'
        },
        {
            'author': ' – Aristotle',
            'quote':'Tình bạn là một tâm hồn trú ngụ trong hai cơ thể.'
        },
        {
            'author': '– Henry J. Kaiser',
            'quote':' Tôi tiến bộ bằng cách ở cạnh với những người tốt đẹp hơn mình và lắng nghe họ. Và tôi giả sử rằng mọi người đều tốt đẹp hơn tôi ở một mặt nào đó. '
        },
        {
            'author': '– Beatrice Vincent',
            'quote':'Những người làm việc cùng bạn phản ánh chính thái độ của bạn. '
        },
        {
            'author': '- Vô danh!',
            'quote':'Đừng quá khắt khe với chính mình. Thậm chí những sai lầm cũng có nghĩa là bạn đang cố gắng!'
        },
        {
            'author': ' – Aesop',
            'quote':'Không có hành động tử tế nào, dù nhỏ, lại bị xem là lãng phí.'
        },
        {
            'author': '- Vô danh!',
            'quote':' Bất luận lúc nào khi bạn nghe điện thoại, khi nhấc điện thoại lên xin bạn hãy cười lên, vì đối phương sẽ cảm nhận được nụ cười của bạn!'
        },
        {
            'author': '– Bill Gates',
            'quote':' Cuộc sống vốn không công bằng, hãy tập quen dần với điều đó! '
        },
        {
            'author': '- Vô danh!',
            'quote':' Lưỡi không xương nhưng đủ cứng để làm vỡ nát một trái tim… vì thế hãy cẩn thận với ngôn từ của bạn!'
        },
        {
            'author': '- Ralph Nichols',
            'quote':'Nhu cầu cơ bản nhất của con người là nhu cầu thấu hiểu và được thấu hiểu.'
        },
        {
            'author': '- Vô danh!',
            'quote':' Hãy ghi nhớ 3 điều: CỐ GẮNG, KIÊN ĐỊNH, TIN TƯỞNG'
        }
    ]
};

document.getElementById('button').addEventListener('click', clickButton);   

function clickButton (){
    var n = data.node.length;
    var random = Math.floor((Math.random()*n));
    document.getElementById('viewQuote').innerHTML = `
        <div>${data.node[random].quote}</div>
        <div>${data.node[random].author}</div>
    `;
}

window.onload = clickButton ();