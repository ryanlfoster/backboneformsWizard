
    var FieldSetView = Backbone.View.extend({

        initialize : function(options) {
            this.template   = _.template(this.constructor.templateSrc);
            this.schema    = options.schema;
            this.fieldsets = options.fieldsets;
            this.el        = options.el;
            this.previous  = options.previous || true;
            _.bindAll(this, 'render', 'createSubForm');

            //  Fieldset
            this.fieldsetTitleTemplate = _.template(this.constructor.titleTemplateSrc);
            this.fieldsetTemplate      = _.template(this.constructor.fieldsetTemplate);
        },

        render: function() {
            var renderedContent = this.template();
            $(this.el).html(renderedContent);
            this.createSubForm()
            return this;
        },

        createSubForm : function() {
            this.subForms = [], fields = null, tmpForm = null;

            _.each (this.fieldsets, _.bind(function(el, idx) {

                fields = _.pick(this.schema, el['fields']);

                $(this.el).find('.steps').append( this.fieldsetTitleTemplate({
                    isActive : (idx == 0),
                    index    : idx,
                    legend   : el['legend']
                }) );

                $(this.el).find('.step-content').append( this.fieldsetTemplate({
                    index : idx,
                    isActive : (idx == 0)
                }) );

                tmpForm = new Backbone.Form({
                    schema : fields,
                    el : '#fieldset' + idx
                });

                $('#fieldset' + idx).append(tmpForm.render().el);
                this.subForms.push(tmpForm);

                tmpForm = fields = null;
            }, this));
        }

    }, {
        templateSrc : '<div class="wizard" data-initialize="wizard">\
                        <ul class="steps"></ul>\
                        <div class="actions">\
                            <button class="btn btn-default btn-prev">\
                                <span class="glyphicon glyphicon-arrow-left"></span>Prev</button>\
                            <button class="btn btn-default btn-next" data-last="Complete">Next\
                                <span class="glyphicon glyphicon-arrow-right"></span>\
                            </button>\
                        </div>\
                        <div class="step-content"></div>\
                    </div>',

        titleTemplateSrc : '<li data-step="<%= index %>" class="<%= isActive ? "active" : "" %>">\
                                <span class="badge"><%= index + 1 %></span><%= legend %>\
                                <span class="chevron"></span>\
                            </li>',

        fieldsetTemplate : '<div class="step-pane <%= isActive ? "active" : "" %> sample-pane alert" data-step="<%= index %>" id="fieldset<%= index %>"></div>'
    });
