/**
 * Created by Jepson on 2017/5/30.
 */
/* ���ߺ����� Tools ��װ������ jquery  */
(function( window ){
    function Tools() {}

    Tools.fn = Tools.prototype = {
        constructor: Tools,
        author: 'Jepson'
    };

    /* ��չ���� */
    Tools.extend = Tools.fn.extend = function( obj ) {
        for ( var k in obj ) {
            // һ�㻹�����һ���ж� if obj.hasOwnProperty( k )
            // ����ֻ�Ǽ򵥵� �����࣬�ȼ���д
            this[ k ] = obj[ k ];
        }
    };

    /* ���ߺ���ģ�� */
    Tools.extend( {
        /* �������� query(url) ����url ���Ĳ�������ɶ����ֵ�� */
        query : function( url ) {
            var obj = {};
            var str = url.split('?')[1];
            str.split('&').forEach(function( v, i ) {
                var arr = v.split('=');
                obj[arr[0]] = arr[1] ? arr[1] : '';
            });
            return obj;
        }
    });

    /* ҳ��ģ�幦�ܿ� */
    Tools.extend( {
        /* ��ҳ���� */
        fenye : function( obj ) {
            /*------  ������� ------*/
            var href = location.href.split('?')[0]; // ��ȡ��ǰҳ�� url
            /* Ĭ�ϲ��� */
            var base = {
                pageNum : 1,     // �ܹ���ҳ������Ĭ����Ϊ 1
                pageVal : 'pageid',     // ����ҳ���л��Ĳ���,����Ĭ��ʹ�� pageid������ pageid ��ҳ
                start : 1,       // �����Ӽ� ��ʼ�� Ĭ��Ϊ 1
                pageUrl : href,  // ����ֵĬ��Ϊ��ǰҳ��  xxx.html?pageVal
                extraStr: ''     // Ĭ��Ϊ�գ�������Ҫ���� url �е�ֵ  &name=123...
            };
            /* ���������Ĳ�����ֵ�� base */
            for ( var k in obj ) {
                base[ k ] = obj[ k ];
            }
            // ���� search ��ȡ���� ����  pageid=x
            var o = {};
            // ��ʼ������ { base.pageVal=base.start }
            o[base.pageVal] = base.start;

            var urlObj = location.search ? Tools.query( location.search ) : o;
            var pageid = parseInt( urlObj[base.pageVal] || base.start ) ;

            /* ��ȡԪ�ؽڵ� */
            var $btlast = $('.mfenye-last'); // ��һ��ҳ��
            var $btnext = $('.mfenye-next'); // ��һ��ҳ��
            var $select = $('.mfenye-select'); // select ��ǩ


            /*------  ��ӹ��� ------*/
            if ( !isNaN( +base.pageNum ) && !isNaN( +pageid ) ) {
                // ��һҳ����
                pageid <= base.start ? $btlast.attr('href','javascript:;') : ( $btlast.attr('href', base.pageUrl + '?' + base.pageVal + '='+(pageid-1) + base.extraStr ) );
                // ��һҳ����
                pageid >= (base.start + base.pageNum - 1) ? $btnext.attr('href','javascript:;') : ( $btnext.attr('href', base.pageUrl + '?' + base.pageVal + '='+(pageid+1) + base.extraStr ) );

                /*  select option ѡ����ת����  */
                $select.html('');   // ���
                /* ��� option */
                for ( var i = 1; i <= base.pageNum; i++ ) {
                    var option = document.createElement('option');
                    option.value = i + base.start - 1;  // �� 1 + start - 1 ��ʼ
                    option.innerHTML =  i  + ' / ' + base.pageNum;
                    /* ���� �ײ�ѡ�е� option */
                    if( i == ( pageid - base.start + 1 ) ) option.selected = true;
                    $select.append( option );
                }
                /* ѡ�� option �л�����Ӧҳ�� */
                $select.on('change',function() {
                    location.href = base.pageUrl +  '?' + base.pageVal + '=' + $select[0]['value'] + base.extraStr;
                });
            }
        }
    });

    window.Tools = Tools; // ���Ⱪ¶ Tools ������

})( window );


(function($) {
    $.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" +
            name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
