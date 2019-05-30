function buildMessage(messageContent, fontColor, fontSize, fontFamily) {
    var attributes = [
        "color = " + fontColor ? fontColor : "#fff",
        "size = " + fontSize ? fontSize : "4",
        fontFamily ? "face = " + fontFamily : ''
    ];

    var messageBuilder = "";
    messageBuilder += '<font ';
    messageBuilder += attributes.join(' ');
    messageBuilder += '>';
    messageBuilder += messageContent;
    messageBuilder += '</font>';

    return messageBuilder;
}

function showRing() {
    Swal.fire({
        title: 'Bùm!',
        text: 'Tặng em kim cương nè \\(^.^)/',
        imageUrl: 'http://www.hungphatusa.vn/Images/News/Kim-c%C6%B0%C6%A1ng-%C4%91%E1%BA%B9p.jpg',
        imageWidth: 400,
        imageHeight: 200,
        animation: true,
        confirmButtonText: 'Cảm ơn anh iu!!!',
    }).then(result => {
        Swal.fire({
            imageUrl: 'https://doc-04-9s-docs.googleusercontent.com/docs/securesc/i689em8ussqq60174m0qhnv39q2k5d9t/7u8ntr7n9gn8bfrrroummuv1mt6djj0e/1559217600000/04852701047533046101/04852701047533046101/1uehEZuoxEZ98EzDdNLQxN7n7MPAXUEf7?e=view',
            confirmButtonText: 'Thả tim <3',
        })
    });
}

mensaje = [
    buildMessage("Trúc yêu dấu ơi!", null, "6", "Courier New"),
    buildMessage('Em có biết không...'),
    buildMessage('Hôm nay không như ngày hôm qua...'),
    buildMessage('Hôm nay là một ngày đặc biệt...'),
    buildMessage('Là ngày mà một thiên thần đáng yêu đã có mặt trên thế giới cách đây 24 năm'),
    buildMessage("It's you, my bae"),
    buildMessage('Luôn mỉm cười và may mắn em nhé.'),
    buildMessage("~~~~I'll always be by your side~~~~")
].join(' <br> ');
line = 0;
cursor = '|';
function teclear() {
    if (line == mensaje.length) cursor = '';
    document.getElementById('TextContent').innerHTML = mensaje.substring(0, line) + cursor;
    var objDiv = document.getElementById("TextContent");
    objDiv.scrollTop = objDiv.scrollHeight;
    if (line++ < mensaje.length) setTimeout("teclear()", 100);
    else setTimeout("showRing()", 1000);
}