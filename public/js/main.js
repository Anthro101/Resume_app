// $(document).ready(function() {
// 	console.log('im alive');
// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('#name').html(response.responseJSON.name_first + ' ' + response.responseJSON.name_last);
// 			console.log(response.responseJSON);
// 		}
// 	});
// });

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			console.log(response.responseJSON.contact_info.street_address.street);
// 			$('#street').html(response.responseJSON.contact_info.street_address.street);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			console.log(response.responseJSON.contact_info.street_address.city);
// 			$('#city').html(response.responseJSON.contact_info.street_address.city);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			console.log(response.responseJSON.contact_info.street_address.zip_code);
// 			$('#zip_code').html(response.responseJSON.contact_info.street_address.zip_code);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			console.log(response.responseJSON.contact_info.street_address.state);
// 			$('#state').html(response.responseJSON.contact_info.street_address.state);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			console.log(response.responseJSON.contact_info.email);
// 			$('#email').html(response.responseJSON.contact_info.email);
// 			console.log(response.responseJSON);
// 		}
// 	});

	// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
	// 	complete : function(response) {
	// 		console.log(response.responseJSON.contact_info.phone);
	// 		$('#phone').html(response.responseJSON.contact_info.phone);
	// 		console.log(response.responseJSON);
	// 	}
	// });
	
	$.ajax('/api/resumes/51c2084640ea606911000001', {
		complete : function(response) {
			// $('#experience').html(response.responseJSON.experience);
			console.log(response.responseJSON);
		}
	});

console.log('#userDataForm');
$(document).ready(function() {


	$('.education_block_add').click(function() {
		var html = $('.education_block').first().clone();
		$('.repeat_education').before(html);
		console.log($('.repeat_education'));
		return false;
	});

	$('.experience_block_add').click(function() {
		var html = $('.experience_block').first().clone();
		var responsibilities = html.find('.individual_responsibilities');
		responsibilities.each(function(index, item) {
			if (index != 0)
				$(item).remove();
		});
		console.log (responsibilities);
		$('.repeat_experience').before(html);
		console.log($('.repeat_experience'));
		return false;
	});

	 $('.responsibility_block_add').click(function() {
        var html = $('.individual_responsibilities').first().clone();
        $('.responsibility_block .text-center').append(html);
        console.log($('.responsibility_skills'));
        return false;
     });

	$('.skill_block_add').click(function() {
		var html = $('.skill_block').first().clone();
		$('.repeat_skills').before(html);
		console.log($('.repeat_skills'));
		return false;
	});

	$('.award_block_add').click(function() {
		var html = $('.award_block').first().clone();
		$('.repeat_awards').before(html);
		console.log($('.repeat_awards'));
		return false;
	});

	$('#userDataForm').submit(function() {
		var userData = {};

		userData.fullName = $('#name').val();

		userData.schools = [];
		var education_blocks = $('.education_block');
		console.log(education_blocks);

		console.log(userData);
		return false;
	});

});
