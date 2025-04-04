function ac(tab, contentId) {
    // ลบ class 'activet' จากทุกแท็บ
    var tabs = document.querySelectorAll('.tab a');
    tabs.forEach(function(item) {
        item.classList.remove('activet');
    });

    // เพิ่ม class 'activet' ให้กับแท็บที่ถูกคลิก
    tab.classList.add('activet');

    // ซ่อนเนื้อหาทั้งหมดก่อนที่จะโชว์เนื้อหาของแท็บใหม่
    var contents = document.querySelectorAll('.container-change > div');
    contents.forEach(function(content) {
        content.classList.remove('show');   // ลบ class show
        content.classList.add('hidden');    // เพิ่ม class hidden
    });

    // แสดงเนื้อหาของแท็บที่ถูกคลิก
    var contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.classList.remove('hidden');
        contentToShow.classList.add('show');
    }
}