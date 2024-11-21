$(function () {
    /* Tabs rendering */
    $("#tabs, #leavesSubTabs").tabs();

    /* Datepicker integration */
    $("#datePicker").datepicker({
        dateFormat: 'MM yy'
    });
    $("#datePicker").datepicker("setDate", new Date());
    $('#datePickerIcon').click(function () {
        $("#datePicker").focus();
    });

    /* Datatable integration */
    new DataTable('#leavesTable', {
        searching: false,
        columnDefs: [
            {
                orderable: false,
                render: DataTable.render.select(),
                targets: 0
            }
        ],
        fixedColumns: {
            start: 2
        },
        order: [[1, 'asc']],
        paging: false,
        scrollCollapse: true,
        scrollX: true,
        scrollY: 500,
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        pagingType: 'simple',
        language: {
            "info": "_START_ - _END_ OF _TOTAL_",
            "paginate": {
                "first": "First",
                "last": "Last",
                "next": "Next",
                "previous": "Previous"
            },
        }

    });

    /* Swiper integration */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
});