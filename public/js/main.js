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
// 			$('#street').html(response.responseJSON.contact_info.street_address.street);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('#city').html(response.responseJSON.contact_info.street_address.city);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('#state').html(response.responseJSON.contact_info.street_address.state);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('#zip_code').html(response.responseJSON.contact_info.street_address.zip_code);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('#phone').html(response.responseJSON.contact_info.phone);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('#email').html(response.responseJSON.contact_info.email);
// 			console.log(response.responseJSON);
// 		}
// 	});
	
// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.organization_name').html(response.responseJSON.experience.organization);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 	$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.project').html(response.responseJSON.experience.project);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.role_in_org').html(response.responseJSON.experience.role);
// 			console.log(response.responseJSON);
// 		}
// 	// });

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.location').html(response.responseJSON.experience.location);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.start_date').html(response.responseJSON.experience.start_month_year);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.end_date').html(response.responseJSON.experience.end_month_year);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.job_description').html(response.responseJSON.experience.responsibilities);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.school_name').html(response.responseJSON.school.name);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.degree').html(response.responseJSON.school.degree);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.gpa').html(response.responseJSON.school.gpa);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.gpa').html(response.responseJSON.school.gpa);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.major').html(response.responseJSON.school.major);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.minor').html(response.responseJSON.school.minor);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.uni_start_date').html(response.responseJSON.school.start_month_year);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.uni_end_date').html(response.responseJSON.school.end_month_year);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.title').html(response.responseJSON.skill.title);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.category').html(response.responseJSON.skill.category);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.skill_experience').html(response.responseJSON.skill.experience);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.description').html(response.responseJSON.accomplishment.description);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.award_date').html(response.responseJSON.accomplishment.month_year);
// 			console.log(response.responseJSON);
// 		}
// 	});

// 		$.ajax('/api/resumes/51c2084640ea606911000001', {
// 		complete : function(response) {
// 			$('.award_title').html(response.responseJSON.accomplishment.title);
// 			console.log(response.responseJSON);
// 		}
// 	});

// console.log('#userDataForm');
// $(document).ready(function() {


// 	$('.education_block_add').click(function() {
// 		var html = $('.education_block').first().clone();
// 		$('.repeat_education').before(html);
// 		console.log($('.repeat_education'));
// 		return false;
// 	});

// 	$('.experience_block_add').click(function() {
// 		var html = $('.experience_block').first().clone();
// 		var responsibilities = html.find('.individual_responsibilities');
// 		responsibilities.each(function(index, item) {
// 			if (index != 0)
// 				$(item).remove();
// 		});
// 		console.log (responsibilities);
// 		$('.repeat_experience').before(html);
// 		console.log($('.repeat_experience'));
// 		return false;
// 	});

// 	 $('.responsibility_block_add').click(function() {
//         var html = $('.individual_responsibilities').first().clone();
//         $('.responsibility_block .text-center').append(html);
//         console.log($('.responsibility_skills'));
//         return false;
//      });

// 	$('.skill_block_add').click(function() {
// 		var html = $('.skill_block').first().clone();
// 		$('.repeat_skills').before(html);
// 		console.log($('.repeat_skills'));
// 		return false;
// 	});

// 	$('.award_block_add').click(function() {
// 		var html = $('.award_block').first().clone();
// 		$('.repeat_awards').before(html);
// 		console.log($('.repeat_awards'));
// 		return false;
// 	});

// 	$('#userDataForm').submit(function() {
// 		var userData = {};

// 		userData.name_first = $('#first_name').val();
// 		userData.name_last = $('#last_name').val();
// 		userData.linked_in = $('#linkedIn').val();
// 		userData.website = $('#personal_website').val();
// 		userData.twitter = $('#twitter').val();
		
// 		userData.contact_info = {};
// 		userData.contact_info.email = $('#email').val();
// 		userData.contact_info.phone = $('#phone').val();

// 		userData.contact_info.street_address = {};
// 		userData.contact_info.street_address.street = $('#street').val();
// 		userData.contact_info.street_address.city = $('#city').val();
// 		userData.contact_info.street_address.state = $('#state').val();
// 		userData.contact_info.street_address.zip_code = $('#zip').val(); 

// 		userData.experience = [];
// 		var experience_groups = $('.experience_block');
// 			experience_groups.each(function(index, item) {
// 			var exp_start 		= $(item).find('.start_month_year').val();
// 			var exp_end			= $(item).find('.end_month_year').val();
// 			var start_month_year= exp_start.slice(5,7) + exp_start.slice(2,4);
// 			var end_month_year 	= exp_end.slice(5,7) + exp_end.slice(2,4);
// 			var responsibilities= []; // create responsibilities array
// 			$(item).find('.responsibilities').each(function(index2, item2){ // get each responsibilities input, push into array
// 				responsibilities.push($(item2).val());
// 			});
// 			userData.experiences.push({
// 				organization	: $(item).find('.organization').val(),
// 				role			: $(item).find('.role').val(), 
// 				responsibilities: responsibilities,
// 				start_month_year: start_month_year,
// 				end_month_year	: end_month_year
// 			});
// 		});

		// school_groups - create array to store multiple schools
		userData.schools = []; 

		var education_blocks = $('.education_block'); // select all schools, get each .class

		// for each class, create object with keys and values:
		education_blocks.each(function(index, item) {
			var end 			= $(item).find('.uni_end_date').val();
			var uni_end_date	= end.slice(5,7) + end.slice(2,4);
			var start     		= $(item).find('.uni_start_date').val();
			var uni_start_date	= start.slice(5,7) + start.slice(2,4);
			 // slice month-year to get into MMYY format
			userData.schools.push({
				name 			: $(item).find('.school_name').val(),
				degree			: $(item).find('.degree').val(),
				gpa				: $(item).find('.gpa').val(),
				major 			: $(item).find('.major').val(),
				minor			: $(item).find('.minor').val(),
				start_month_year: uni_start_date,
				end_month_year	: uni_end_date
			}); // end .push loop

		});

		// userData.skills = []; 

		// var skill_blocks = $('.skill_block');

		// skill_blocks.each(function(index, item) {
		// 	userData.skills.push({
		// 		title 			: $(item).find('.title').val(),
		// 		level 			: $(item).find('.skill_experience').val(),
		// 	}); 

		// }); 
// 		// awards & accomplishments
		// userData.accomplishments = [];

		// var award_blocks= $('.award_block');

		// award_blocks.each(function(index, item) {
		// 	var date			= $(item).find('.award_date').val();
		// 	var award_date 		= date.slice(5,7) + date.slice(2,4);
		// 	userData.accomplishments.push({
		// 		title			: $(item).find('.award_title').val(),
		// 		description		: $(item).find('.description').val(),
		// 		award_date		: award_date
		// 	}); 
		// });
// 		console.log(userData);

// 		var postData = JSON.stringify ({'resume': userData});

// 		console.log(postData);
// 		$.ajax({
// 			type: 'POST',
// 			url: '/api/resumes',
// 			data: postData
// 		}).done(function(){alert("Data saved");});
// 		return false;
// 	});
// });
		

