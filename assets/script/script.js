$(document).ready(function(){
    
    // 스크롤 이벤트
    $(window).scroll(function(){
        let winTop = $(window).scrollTop();

        // 헤더 색상 변경
        let careerOffset = $('.career').offset().top - 100;
        let experienceOffset = $('.experience').offset().top - 100;

        if(winTop > careerOffset && winTop < experienceOffset) {
            $('.nav, .menu_btn').addClass('blue');
        } else {
            $('.nav, .menu_btn').removeClass('blue');
        };
        
        // about 스크롤 효과
        let about = $('.about');
        let aboutOffset = about.offset().top - 600;
        if(winTop >= aboutOffset){
            about.addClass('on');
        } else {
            about.removeClass('on');
        };

        // career 스크롤 효과
        let career = $('.career');
        careerOffset = career.offset().top - 400;
        if(winTop >= careerOffset){
            career.addClass('on');
        } else {
            career.removeClass('on');
        };

        // career 텍스트 show/hide
        experienceOffset = $('.experience').offset().top;
        aboutOffset = about.offset().top;
        if(winTop > aboutOffset && winTop < experienceOffset) {
            $('.career .bg_tit').addClass('visa');
        } else {
            $('.career .bg_tit').removeClass('visa');
        };

        // experience 스크롤 효과
        let experience = $('.experience');
        experienceOffset = experience.offset().top - 700;
        if(winTop >= experienceOffset){
            experience.addClass('on');
        } else {
            experience.removeClass('on');
        };

        // experience 리스트 스크롤 효과
        $('.experience .pf_list').each(function(){
            if(winTop >= $(this).offset().top - 700){
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            };
        });

        // top버튼 show/hide
        if(winTop > 1) {
            $('.top_btn').addClass('on');
        } else {
            $('.top_btn').removeClass('on');
        };

        // top버튼 효과
        h = $(document).outerHeight(),
        winh = $(window).height();

        if(winTop >= (h - winh) / 2){
            //절반 넘어가면
            $('.top_btn .right-box .box-in').attr('style', 'transform: rotate(180deg);');
            $('.top_btn .left-box .box-in').attr('style', 'transform: rotate(' + ((winTop/(h - winh) - 0.5 ) * 360) + 'deg);');
        }else{//절반 미만이면
            $('.top_btn .left-box .box-in').attr('style', 'transform: rotate(0deg);');
            $('.top_btn .right-box .box-in').attr('style', 'transform: rotate(' + (winTop/(h - winh) * 360) + 'deg);');
        }
    });

    // (mobile) menu 활성화
    $('.menu_btn').on('click', function(){
        $(this).toggleClass('open').siblings('.menu').toggleClass('show');

        $('.menu a').on('click', function(){
            $(this).parents('.menu').removeClass('show').siblings('.menu_btn').removeClass('open');
        });
    });

	// top버튼 상단 이동
	$('.top_btn').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
});
