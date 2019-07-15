Redmine::Plugin.register :redmine_time_entry_timepicker do
  name 'Redmine Time Entry Timepicker plugin'
  author 'Bilel KEDIDI'
  description 'This is a plugin for Redmine that change the timepicker format'
  version '0.0.1'
  url 'https://www.github.com/bilel-kedidi/redmine_time_entry_timepicker'
  author_url 'https://www.github.com/bilel-kedidi'
end

class TimeFieldHooks < Redmine::Hook::ViewListener
  render_on :view_timelog_edit_form_bottom, partial: 'timelog/add_timepicker'
end
