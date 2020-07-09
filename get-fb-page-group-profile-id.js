/***************************************************************** 
Tạo một bookmark với URL là nội dung code này.
Tên tùy ý bạn.
Vào Group/Page/Profile muốn lấy ID và bấm vào Bookmark đã tạo
*****************************************************************/

javascript:!function(){if(document.querySelector("div[class='_4-u2 _hoc clearfix _4adj _4-u8']")!=null){prompt("ID",document.querySelector("div[class='_4-u2 _hoc clearfix _4adj _4-u8']").getAttribute('id').split('_')[1])}else if(document.querySelector("a[class='_2dgj']")!=null){prompt("ID",document.querySelector("a[class='_2dgj']").getAttribute('href').split('/')[1])}else if(document.querySelector("div[id='pagelet_timeline_main_column']")!=null){prompt("ID",JSON.parse(document.querySelector("div[id='pagelet_timeline_main_column']").getAttribute('data-gt')).profile_owner)}}()
