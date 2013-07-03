$(document).ready(function() {
	console.log('im alive');
	$.ajax('/api/resumes/51c2084640ea606911000001', {
		complete : (function(response) {
			$('#name').html(response.responseJSON.name_first + ' ' + response.responseJSON.name_last);
			$('#street').html(response.responseJSON.contact_info.street_address.street);
			$('#city').html(response.responseJSON.contact_info.street_address.city);
			$('#state').html(response.responseJSON.contact_info.street_address.state);
			$('#zip_code').html(response.responseJSON.contact_info.street_address.zip_code);
			$('#phone').html(response.responseJSON.contact_info.phone);
			$('#email').html(response.responseJSON.contact_info.email);
			$(response.responseJSON.experience).each(function (index, item) {
				var html = $('.experience_inner').last().clone();
				html.find('.organization_name').html(item.organization);
				html.find('.project').html(item.project);
				html.find('.role_in_org').html(item.role);
				html.find('.location').html(item.location);
				html.find('.start_date').html(item.start_month_year);
				html.find('.end_date').html(item.end_month_year);
				html.find('.job_description').empty();
				html.find('.job_description').html(item.responsibilities);
				$('.experience_inner').last().after(html);
			});
			$(response.responseJSON.schools).each(function (index, item) {
				var html = $('.education_inner').last().clone();
				html.find('.school_name').html(item.name);
				html.find('.degree').html(item.degree);
				html.find('.gpa').html(item.gpa);
				html.find('.major').html(item.major);
				html.find('.minor').html(item.minor);
				html.find('.uni_start_date').html(item.start_month_year);
				html.find('.uni_end_date').html(item.end_month_year);
				$('.education_inner').last().after(html);
			});
			$(response.responseJSON.skills).each(function (index, item) {
				var html = $('.skill').last().clone();
				html.find('.title').html(item.title);
				html.find('.category').html(item.category);
				html.find('.skill_experience').html(item.experience);
				$('.skill').last().after(html);
			});
			$(response.responseJSON.accomplishments).each(function (index, item) {
				var html = $('accomplishment').last().clone();
				html.find('.description').html(item.description);
				html.find('.award_date').html(item.month_year);
				html.find('.award_title').html(item.title);
				$('.accomplishment').last().after(html);
				console.log(response.responseJSON);
			});
		})
	});
});

