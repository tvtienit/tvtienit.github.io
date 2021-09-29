function buildMessage(messageContent, fontColor, fontSize, fontFamily) {
    var attributes = [
        "color = " + fontColor ? fontColor : "#fff",
        "size = " + fontSize ? fontSize : "2",
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

mensaje = [
    buildMessage("Vy! À không, anh muốn gọi em là Chẻ chow của anhh!"),
    buildMessage(`
        Đáng lẽ ra mình cùng nhau ở một nhà hàng, anh tặng em món quà xinh xinh và thổ lộ với em,
        cơ mà với tình hình hiện tại thì anh đành gửi gắm lời anh muốn nói trong bức thư ngắn này.
    `),
    buildMessage(`
        Cũng gần 1 tháng tụi mình nói chuyện với nhau rồi ha, anh cũng không ngờ tới được mình biết nhau nhờ Tinder,
        có nghĩa là mình cũng có duyên với nhau lắm đóoo. 
        Mà thôi, điều quan trọng ở đây là anh đã rất vui.
    `),
    buildMessage(`
        Nó sẽ là một cái cảm giác bồi hồi, sau đó 1 tuần đầu với một chút say nắng khi nói chuyện với em. 
        Kể từ đó ngày nào anh cũng mong chờ tin nhắn, muốn được nói chuyện, cùng em chia sẻ những sở thích, tâm sự cùng nhau.
    `),
    buildMessage(`
        Để  rồi đến bây giờ anh chợt nhận ra là <b>Anh đã thích Em rồi</b>.
    `),
 
    buildMessage(`
        Anh thích tính cách của em, thích cách nói chuyện của em và cả cách suy nghĩ của em, chắc là vì hợp với con người anh.
        Và điều quan trọng là khi anh nói chuyện với em anh cảm thấy rất là thoải mái và thân thiết.
    `),
    buildMessage(`
        Anh hy vọng được gặp em ở ngoài, anh luôn ngóng từng ngày một trôi qua vì anh biết người đứng trước mặt anh sẽ là một
        cô bé rất dễ thương ^.^ Ùa, chắc đến lúc đó anh cũng lo anh ngại ngại không biết nói gì nữa mất =)))
    `),
    buildMessage(`
        Nhưng mà này là chuyện của lúc đó, còn bây giờ thì anh không muốn bỏ lỡ một cơ hội nào cả, mấy hôm nay, thiệt tình trong
        lòng anh rất nôn nao, vì anh muốn sớm đến ngày anh có thể nói ra cảm xúc thật sự của anh. Anh đợi đến ngày này vì anh muốn
        chứng tỏ sự chân thành của anh dành cho em, anh muốn cùng em bước qua một giai đoạn mới. Vậy thì:
    `),
    buildMessage(`
        EM ĐỒNG Ý LÀM NGƯỜI YÊU ANH NHÉ!
    `, '#ff496c'),
    buildMessage(`
        Sau khi em đọc xong bức thư này thì quay trở lại mess, anh sẽ call em hoặc là voice để nói lại với em câu này,
        vì anh cũng muốn em có thể nghe được lời anh nói.
    `),
    buildMessage(`
        Chỉ gói gọn trong đây thì không thể nào diễn tả hết được suy nghĩ của anh lúc này, nên anh mong là có thể cùng em 
        "phá đảo" những món ăn khắp SG, cùng em trải qua những ngày tháng vui buồn sắp tới.
    `),
    buildMessage(`
        Và hy vọng em cũng thích món quà anh tặng ^.^
    `),
    buildMessage(`
        P/S: Anh khom muốn làm TiẾn nữa, mà anh muốn làm Bia đia Đít lép của emmm cơ
    `)
].join(' <br> ');
line = 0;
cursor = '|';
function teclear() {
    if (line == mensaje.length) cursor = '';
    document.getElementById('TextContent').innerHTML = mensaje.substring(0, line) + cursor;
    var objDiv = document.getElementById("TextContent");
    objDiv.scrollTop = objDiv.scrollHeight;
    if (line++ < mensaje.length) setTimeout("teclear()", 50);
}