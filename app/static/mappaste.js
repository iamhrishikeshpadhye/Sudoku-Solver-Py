$(function() {
    var $inputs = $(".def-txt-input");
    var intRegex = /^[\d.]+$/;

    $inputs.on("input.fromManual", function(){
        if(!intRegex.test($(this).val())){
            $(this).val("");
        }
    });

    $inputs.on("paste", function() {
        var $this = $(this);
        var originalValue = $this.val();

        $this.val("");

        $this.one("input.fromPaste", function(){
            $currentInputBox = $(this);

            var pastedValue = $currentInputBox.val();

            if (pastedValue.length == 81 && intRegex.test(pastedValue)) {
                pasteValues(pastedValue);
            }
            else {
                $this.val(originalValue);
            }

            $inputs.attr("maxlength", 1);
        });

        $inputs.attr("maxlength", 81);
    });

    function pasteValues(element) {
        var values = element.split("");

        $(values).each(function(index) {
            var $inputBox = $('.def-txt-input[name="cell-input[' + (index) + ']"]');
            if (!isNaN(values[index])) {
                $inputBox.val(values[index])
            }
            else {
                $inputBox.val("")
            }
        });
    };
});