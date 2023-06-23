frappe.provide('frappe.ui.toolbar');
frappe.ui.toolbar.Toolbar = class Toolbar extends frappe.ui.toolbar.Toolbar {
    make() {
        super.make();
        this.add_language_switcher();
    }

    add_language_switcher() {
        $(document).ready(function() {
            var currentLanguage = frappe.boot.user.language;
            var toggleText = currentLanguage === 'en' ? 'AR' : 'EN';

            var languageToggle = $('<li class="dropdown" style="align-self: center;"><a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><div class="user-image" style="margin: 0px 0px 0px 20px;"><div class="language-toggle" style="display: flex;align-items: center;justify-content: center;width: 25px;height: 25px;border-radius: 50%;background-color: #1f272e;color: #fff;font-weight: bold;margin-top: 25px;">' + toggleText + '</div></div></a></li>');
            $('.navbar .dropdown').last().before(languageToggle);
        
            $('.language-toggle').click(function(event) {
                event.stopPropagation();
                currentLanguage = frappe.boot.user.language;
                if (currentLanguage === 'en') {
                    frappe.call('frappe.client.set_value', {
                        'doctype': 'User',
                        'name': frappe.session.user,
                        'fieldname': 'language',
                        'value': 'ar'
                    }).then(response => {
                        if (response.message) {
                            $(this).text('EN');
                            location.reload();
                        }
                    });
                } else {
                    frappe.call('frappe.client.set_value', {
                        'doctype': 'User',
                        'name': frappe.session.user,
                        'fieldname': 'language',
                        'value': 'en'
                    }).then(response => {
                        if (response.message) {
                            $(this).text('AR');
                            location.reload();
                        }
                    });
                }
            });
        });
    }
}
