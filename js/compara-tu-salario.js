function formatNumber(number) {
  var f = Array(5);
  f[0] = parseInt(number % 1000);
  number /= 1000;
  f[1] = parseInt(number % 1000);
  number /= 1000;
  f[2] = parseInt(number % 1000);
  number /= 1000;

  var ret = "";
  ret += (ret == "" ? (f[2] == 0 ? "" : f[2] + "'") : zeroFill(f[2], 3) + "'");
  ret += (ret == "" ? (f[1] == 0 ? "" : f[1] + ".") : zeroFill(f[1], 3) + ".");
  ret += (ret == "" ? (f[0] == 0 ? "" : f[0]) : zeroFill(f[0], 3));
  return ret;
}

(function($) {
  $(function() {

    var funcionarios;

    $.getJSON('billeton/data.json', function(data) {
      funcionarios = data;

      var funcionario_select = $('#funcionario-select');
      var id = 0;

      data.forEach(function(item) {
        funcionario_select.append(
          '<option value=\"'
            + id++
            + '\" class=\"circle\">'
            + item['funcionario']
            + ' - ' + item['puesto']
            + '</option>'
          );
      })
    });

    $('#funcionario-select').on('change', function() {
      // TODO: potencialmente modificar la foto del funcionario
    });

    $('#calcular-btn').on('click', function() {
      var sueldo = $('#tu-salario').val()
        , id = $('#funcionario-select').val()
        , time1
        , time2
        , resultChart1
        , resultChart2;

        if (!sueldo) {
          $('#tu-salario').focus();

          return;
        }

        if (!id) {
          $('#funcionario-select').focus();

          return;
        }

        $('#funcionario-container').show(150);

        time1 = funcionarios[id]['ingresos_mensuales'] * 2592000 / sueldo;

        // Reemplazar el 750 por el salario mínimo en quetzales
        time2 = funcionarios[id]['ingresos_mensuales'] * 2592000 / 750;

        resultChart1 = new CountUp('vis1', 0, time1);
        resultChart2 = new CountUp('vis2', 0, time2);


        var baseUrl = 'http://twitter.com/share?via=RedxGuate&url=http://goo.gl/o4ck6v&text=';

        $('#tweet1').attr(
          'href',
          baseUrl
            + 'Yo tendría que trabajar '
            + formatTime1(time1)
            + ' para obtener el ingreso mensual el funcionario '
            + funcionarios[id]['funcionario']
        );

        $('#tweet2').attr(
          'href',
          baseUrl
            + 'Una persona con el salario mínimo debería trabajar '
            + formatTime1(time1)
            + ' para obtener el ingreso mensual el funcionario '
            + funcionarios[id]['funcionario']
        );

        resultChart1.formatNumber = formatTime2;
        resultChart2.formatNumber = formatTime2;

        resultChart1.start();
        resultChart2.start();

        $('.funcionario').text(funcionarios[id]['funcionario']);
        $('.puesto').text(funcionarios[id]['puesto']);
        $('.sueldo').text(formatNumber(funcionarios[id]['ingresos_mensuales']));
    });

    $('.popup').click(function(event) {
      var width = 575
        , height = 300
        , left = ($(window).width() - width) / 2
        , top = left = ($(window).height() - height) / 2
        url = this.href,
        opts = 'status=1'
          + ',width=' + width
          + ',height=' + height
          + ',top=' + top
          + ',left=' + left;

          window.open(url, 'twitter', opts);

          return false; 
    });
  });
})(jQuery);
