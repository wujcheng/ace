// Generated from NotepadLexer.g4 by ANTLR 4.7.1
// jshint ignore: start
define(function(require, exports, module) {
    var antlr4 = self.antlr4;
    var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
        "\u0002\u001c\u01ac\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b",
        "\u0001\b\u0001\b\u0001\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003",
        "\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006",
        "\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b",
        "\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f",
        "\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013",
        "\t\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016",
        "\u0004\u0017\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a",
        "\t\u001a\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0003\u0002\u0003\u0002",
        "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002J\n\u0002",
        "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
        "\u0003\u0004\u0007\u0004S\n\u0004\f\u0004\u000e\u0004V\u000b\u0004\u0003",
        "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
        "\u0005\u0003\u0005\u0003\u0006\u0006\u0006a\n\u0006\r\u0006\u000e\u0006",
        "b\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007h\n\u0007\u0003\b\u0007",
        "\bk\n\b\f\b\u000e\bn\u000b\b\u0003\b\u0003\b\u0007\br\n\b\f\b\u000e",
        "\bu\u000b\b\u0003\b\u0003\b\u0005\by\n\b\u0003\b\u0003\b\u0003\t\u0007",
        "\t~\n\t\f\t\u000e\t\u0081\u000b\t\u0003\t\u0003\t\u0003\t\u0003\n\u0007",
        "\n\u0087\n\n\f\n\u000e\n\u008a\u000b\n\u0003\n\u0003\n\u0007\n\u008e",
        "\n\n\f\n\u000e\n\u0091\u000b\n\u0003\n\u0003\n\u0003\u000b\u0007\u000b",
        "\u0096\n\u000b\f\u000b\u000e\u000b\u0099\u000b\u000b\u0003\u000b\u0003",
        "\u000b\u0005\u000b\u009d\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
        "\u0003\f\u0007\f\u00a3\n\f\f\f\u000e\f\u00a6\u000b\f\u0003\f\u0003\f",
        "\u0005\f\u00aa\n\f\u0003\f\u0003\f\u0003\r\u0007\r\u00af\n\r\f\r\u000e",
        "\r\u00b2\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00b8\n\r\f",
        "\r\u000e\r\u00bb\u000b\r\u0003\r\u0003\r\u0003\u000e\u0007\u000e\u00c0",
        "\n\u000e\f\u000e\u000e\u000e\u00c3\u000b\u000e\u0003\u000e\u0003\u000e",
        "\u0003\u000e\u0003\u000e\u0007\u000e\u00c9\n\u000e\f\u000e\u000e\u000e",
        "\u00cc\u000b\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0007\u000f\u00d1",
        "\n\u000f\f\u000f\u000e\u000f\u00d4\u000b\u000f\u0003\u000f\u0003\u000f",
        "\u0003\u000f\u0003\u000f\u0007\u000f\u00da\n\u000f\f\u000f\u000e\u000f",
        "\u00dd\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0007\u0010\u00e2",
        "\n\u0010\f\u0010\u000e\u0010\u00e5\u000b\u0010\u0003\u0010\u0003\u0010",
        "\u0007\u0010\u00e9\n\u0010\f\u0010\u000e\u0010\u00ec\u000b\u0010\u0003",
        "\u0010\u0006\u0010\u00ef\n\u0010\r\u0010\u000e\u0010\u00f0\u0003\u0010",
        "\u0005\u0010\u00f4\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
        "\u0011\u0007\u0011\u00fa\n\u0011\f\u0011\u000e\u0011\u00fd\u000b\u0011",
        "\u0003\u0011\u0005\u0011\u0100\n\u0011\u0003\u0011\u0003\u0011\u0003",
        "\u0012\u0007\u0012\u0105\n\u0012\f\u0012\u000e\u0012\u0108\u000b\u0012",
        "\u0003\u0012\u0005\u0012\u010b\n\u0012\u0003\u0012\u0007\u0012\u010e",
        "\n\u0012\f\u0012\u000e\u0012\u0111\u000b\u0012\u0003\u0012\u0003\u0012",
        "\u0005\u0012\u0115\n\u0012\u0003\u0013\u0007\u0013\u0118\n\u0013\f\u0013",
        "\u000e\u0013\u011b\u000b\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u011f",
        "\n\u0013\f\u0013\u000e\u0013\u0122\u000b\u0013\u0003\u0013\u0006\u0013",
        "\u0125\n\u0013\r\u0013\u000e\u0013\u0126\u0003\u0013\u0005\u0013\u012a",
        "\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
        "\u0007\u0014\u0131\n\u0014\f\u0014\u000e\u0014\u0134\u000b\u0014\u0003",
        "\u0014\u0005\u0014\u0137\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015",
        "\u0007\u0015\u013c\n\u0015\f\u0015\u000e\u0015\u013f\u000b\u0015\u0003",
        "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0007\u0016\u0146",
        "\n\u0016\f\u0016\u000e\u0016\u0149\u000b\u0016\u0003\u0016\u0003\u0016",
        "\u0005\u0016\u014d\n\u0016\u0003\u0017\u0007\u0017\u0150\n\u0017\f\u0017",
        "\u000e\u0017\u0153\u000b\u0017\u0003\u0017\u0007\u0017\u0156\n\u0017",
        "\f\u0017\u000e\u0017\u0159\u000b\u0017\u0003\u0017\u0003\u0017\u0005",
        "\u0017\u015d\n\u0017\u0003\u0018\u0007\u0018\u0160\n\u0018\f\u0018\u000e",
        "\u0018\u0163\u000b\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0167\n",
        "\u0018\f\u0018\u000e\u0018\u016a\u000b\u0018\u0003\u0018\u0006\u0018",
        "\u016d\n\u0018\r\u0018\u000e\u0018\u016e\u0003\u0018\u0005\u0018\u0172",
        "\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0006\u0019",
        "\u0178\n\u0019\r\u0019\u000e\u0019\u0179\u0003\u001a\u0003\u001a\u0003",
        "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0007\u001b\u0182\n\u001b",
        "\f\u001b\u000e\u001b\u0185\u000b\u001b\u0003\u001b\u0005\u001b\u0188",
        "\n\u001b\u0003\u001b\u0007\u001b\u018b\n\u001b\f\u001b\u000e\u001b\u018e",
        "\u000b\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0192\n\u001b\u0003",
        "\u001c\u0007\u001c\u0195\n\u001c\f\u001c\u000e\u001c\u0198\u000b\u001c",
        "\u0003\u001c\u0003\u001c\u0007\u001c\u019c\n\u001c\f\u001c\u000e\u001c",
        "\u019f\u000b\u001c\u0003\u001c\u0006\u001c\u01a2\n\u001c\r\u001c\u000e",
        "\u001c\u01a3\u0003\u001c\u0005\u001c\u01a7\n\u001c\u0003\u001c\u0003",
        "\u001c\u0003\u001c\u0003\u001c\u0007\u0097\u00a4\u010f\u0157\u018c\u0002",
        "\u001d\r\u0003\u000f\u0004\u0011\u0005\u0013\u0006\u0015\u0007\u0017",
        "\b\u0019\t\u001b\u0002\u001d\n\u001f\u000b!\f#\r%\u000e\'\u000f)\u0010",
        "+\u0011-\u0012/\u00131\u00143\u00155\u00167\u00179\u0018;\u0019=\u001a",
        "?\u001bA\u001c\r\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\b",
        "\u0004\u0002\u000f\u000f\"\"\t\u0002\"#))//2;AAC\\c|\u0003\u0002\u007f",
        "\u007f\u0004\u0002\f\f\u007f\u007f\u0005\u0002\f\f^_\u007f\u007f\u0003",
        "\u0002^_\u01d8\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
        "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
        "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
        "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003\u001d\u0003\u0002",
        "\u0002\u0002\u0004\u001f\u0003\u0002\u0002\u0002\u0005!\u0003\u0002",
        "\u0002\u0002\u0006#\u0003\u0002\u0002\u0002\u0006%\u0003\u0002\u0002",
        "\u0002\u0006\'\u0003\u0002\u0002\u0002\u0006)\u0003\u0002\u0002\u0002",
        "\u0007+\u0003\u0002\u0002\u0002\b-\u0003\u0002\u0002\u0002\b/\u0003",
        "\u0002\u0002\u0002\t1\u0003\u0002\u0002\u0002\n3\u0003\u0002\u0002\u0002",
        "\n5\u0003\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\n9\u0003\u0002",
        "\u0002\u0002\u000b;\u0003\u0002\u0002\u0002\u000b=\u0003\u0002\u0002",
        "\u0002\f?\u0003\u0002\u0002\u0002\fA\u0003\u0002\u0002\u0002\rI\u0003",
        "\u0002\u0002\u0002\u000fM\u0003\u0002\u0002\u0002\u0011T\u0003\u0002",
        "\u0002\u0002\u0013[\u0003\u0002\u0002\u0002\u0015`\u0003\u0002\u0002",
        "\u0002\u0017d\u0003\u0002\u0002\u0002\u0019l\u0003\u0002\u0002\u0002",
        "\u001b\u007f\u0003\u0002\u0002\u0002\u001d\u0088\u0003\u0002\u0002\u0002",
        "\u001f\u0097\u0003\u0002\u0002\u0002!\u00a4\u0003\u0002\u0002\u0002",
        "#\u00b0\u0003\u0002\u0002\u0002%\u00c1\u0003\u0002\u0002\u0002\'\u00d2",
        "\u0003\u0002\u0002\u0002)\u00e3\u0003\u0002\u0002\u0002+\u00f7\u0003",
        "\u0002\u0002\u0002-\u0106\u0003\u0002\u0002\u0002/\u0119\u0003\u0002",
        "\u0002\u00021\u012e\u0003\u0002\u0002\u00023\u013d\u0003\u0002\u0002",
        "\u00025\u0147\u0003\u0002\u0002\u00027\u0151\u0003\u0002\u0002\u0002",
        "9\u0161\u0003\u0002\u0002\u0002;\u0177\u0003\u0002\u0002\u0002=\u017b",
        "\u0003\u0002\u0002\u0002?\u0183\u0003\u0002\u0002\u0002A\u0196\u0003",
        "\u0002\u0002\u0002CD\u0007\u6809\u0002\u0002DJ\u0007\u989a\u0002\u0002",
        "EF\u0007\u7b82\u0002\u0002FJ\u0007\u4ecd\u0002\u0002GH\u0007\u5208\u0002",
        "\u0002HJ\u0007\u7c7d\u0002\u0002IC\u0003\u0002\u0002\u0002IE\u0003\u0002",
        "\u0002\u0002IG\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KL\b",
        "\u0002\u0002\u0002L\u000e\u0003\u0002\u0002\u0002MN\u0007%\u0002\u0002",
        "NO\u0003\u0002\u0002\u0002OP\b\u0003\u0003\u0002P\u0010\u0003\u0002",
        "\u0002\u0002QS\u0005\u0013\u0005\u0002RQ\u0003\u0002\u0002\u0002SV\u0003",
        "\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
        "UW\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0007\f\u0002",
        "\u0002XY\u0003\u0002\u0002\u0002YZ\b\u0004\u0004\u0002Z\u0012\u0003",
        "\u0002\u0002\u0002[\\\t\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
        "]^\b\u0005\u0004\u0002^\u0014\u0003\u0002\u0002\u0002_a\t\u0003\u0002",
        "\u0002`_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b`\u0003\u0002",
        "\u0002\u0002bc\u0003\u0002\u0002\u0002c\u0016\u0003\u0002\u0002\u0002",
        "dg\u0005\u0015\u0006\u0002eh\u0005\u0011\u0004\u0002fh\u0007\u0002\u0002",
        "\u0003ge\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002h\u0018\u0003",
        "\u0002\u0002\u0002ik\u0005\u0013\u0005\u0002ji\u0003\u0002\u0002\u0002",
        "kn\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002",
        "\u0002mo\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002os\u0007}",
        "\u0002\u0002pr\u0005\u0013\u0005\u0002qp\u0003\u0002\u0002\u0002ru\u0003",
        "\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002",
        "tx\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vy\u0005\u0011\u0004",
        "\u0002wy\u0007\u0002\u0002\u0003xv\u0003\u0002\u0002\u0002xw\u0003\u0002",
        "\u0002\u0002yz\u0003\u0002\u0002\u0002z{\b\b\u0005\u0002{\u001a\u0003",
        "\u0002\u0002\u0002|~\u0005\u0013\u0005\u0002}|\u0003\u0002\u0002\u0002",
        "~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f",
        "\u0080\u0003\u0002\u0002\u0002\u0080\u0082\u0003\u0002\u0002\u0002\u0081",
        "\u007f\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u52ab\u0002\u0002\u0083",
        "\u0084\u0007\u8bb2\u0002\u0002\u0084\u001c\u0003\u0002\u0002\u0002\u0085",
        "\u0087\u0005\u0013\u0005\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087",
        "\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088",
        "\u0089\u0003\u0002\u0002\u0002\u0089\u008b\u0003\u0002\u0002\u0002\u008a",
        "\u0088\u0003\u0002\u0002\u0002\u008b\u008f\u0007?\u0002\u0002\u008c",
        "\u008e\u0005\u0013\u0005\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008e",
        "\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f",
        "\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002\u0091",
        "\u008f\u0003\u0002\u0002\u0002\u0092\u0093\b\n\u0006\u0002\u0093\u001e",
        "\u0003\u0002\u0002\u0002\u0094\u0096\u000b\u0002\u0002\u0002\u0095\u0094",
        "\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0098",
        "\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u009c",
        "\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009d",
        "\u0005\u0011\u0004\u0002\u009b\u009d\u0007\u0002\u0002\u0003\u009c\u009a",
        "\u0003\u0002\u0002\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u009e",
        "\u0003\u0002\u0002\u0002\u009e\u009f\b\u000b\u0007\u0002\u009f\u00a0",
        "\b\u000b\u0007\u0002\u00a0 \u0003\u0002\u0002\u0002\u00a1\u00a3\u000b",
        "\u0002\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003",
        "\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003",
        "\u0002\u0002\u0002\u00a5\u00a9\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003",
        "\u0002\u0002\u0002\u00a7\u00aa\u0005\u0011\u0004\u0002\u00a8\u00aa\u0007",
        "\u0002\u0002\u0003\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00a8\u0003",
        "\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ac\b",
        "\f\u0007\u0002\u00ac\"\u0003\u0002\u0002\u0002\u00ad\u00af\u0005\u0013",
        "\u0005\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b2\u0003\u0002",
        "\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002",
        "\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002",
        "\u0002\u0002\u00b3\u00b4\u0007\u89e5\u0002\u0002\u00b4\u00b5\u0007\u91cc",
        "\u0002\u0002\u00b5\u00b9\u0003\u0002\u0002\u0002\u00b6\u00b8\u0005\u0013",
        "\u0005\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8\u00bb\u0003\u0002",
        "\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002",
        "\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002",
        "\u0002\u0002\u00bc\u00bd\b\r\b\u0002\u00bd$\u0003\u0002\u0002\u0002",
        "\u00be\u00c0\u0005\u0013\u0005\u0002\u00bf\u00be\u0003\u0002\u0002\u0002",
        "\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002",
        "\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c4\u0003\u0002\u0002\u0002",
        "\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007\u4f8d\u0002\u0002",
        "\u00c5\u00c6\u0007\u53e7\u0002\u0002\u00c6\u00ca\u0003\u0002\u0002\u0002",
        "\u00c7\u00c9\u0005\u0013\u0005\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002",
        "\u00c9\u00cc\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002",
        "\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002",
        "\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cd\u00ce\b\u000e\b\u0002\u00ce",
        "&\u0003\u0002\u0002\u0002\u00cf\u00d1\u0005\u0013\u0005\u0002\u00d0",
        "\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002\u00d2",
        "\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3",
        "\u00d5\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5",
        "\u00d6\u0007\u52ab\u0002\u0002\u00d6\u00d7\u0007\u8bb2\u0002\u0002\u00d7",
        "\u00db\u0003\u0002\u0002\u0002\u00d8\u00da\u0005\u0013\u0005\u0002\u00d9",
        "\u00d8\u0003\u0002\u0002\u0002\u00da\u00dd\u0003\u0002\u0002\u0002\u00db",
        "\u00d9\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc",
        "\u00de\u0003\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00de",
        "\u00df\b\u000f\t\u0002\u00df(\u0003\u0002\u0002\u0002\u00e0\u00e2\u0005",
        "\u0013\u0005\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e5\u0003",
        "\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003",
        "\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003",
        "\u0002\u0002\u0002\u00e6\u00ea\u0007\u007f\u0002\u0002\u00e7\u00e9\u0005",
        "\u0013\u0005\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ec\u0003",
        "\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003",
        "\u0002\u0002\u0002\u00eb\u00f3\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003",
        "\u0002\u0002\u0002\u00ed\u00ef\u0005\u0011\u0004\u0002\u00ee\u00ed\u0003",
        "\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003",
        "\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003",
        "\u0002\u0002\u0002\u00f2\u00f4\u0007\u0002\u0002\u0003\u00f3\u00ee\u0003",
        "\u0002\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003",
        "\u0002\u0002\u0002\u00f5\u00f6\b\u0010\u0007\u0002\u00f6*\u0003\u0002",
        "\u0002\u0002\u00f7\u00fb\u0007}\u0002\u0002\u00f8\u00fa\u0005\u0013",
        "\u0005\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fd\u0003\u0002",
        "\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002",
        "\u0002\u0002\u00fc\u00ff\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002",
        "\u0002\u0002\u00fe\u0100\u0005\u0011\u0004\u0002\u00ff\u00fe\u0003\u0002",
        "\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002",
        "\u0002\u0002\u0101\u0102\b\u0011\n\u0002\u0102,\u0003\u0002\u0002\u0002",
        "\u0103\u0105\u0005\u0013\u0005\u0002\u0104\u0103\u0003\u0002\u0002\u0002",
        "\u0105\u0108\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002",
        "\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u010a\u0003\u0002\u0002\u0002",
        "\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010b\n\u0004\u0002\u0002",
        "\u010a\u0109\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002",
        "\u010b\u010f\u0003\u0002\u0002\u0002\u010c\u010e\n\u0005\u0002\u0002",
        "\u010d\u010c\u0003\u0002\u0002\u0002\u010e\u0111\u0003\u0002\u0002\u0002",
        "\u010f\u0110\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002\u0002",
        "\u0110\u0114\u0003\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002",
        "\u0112\u0115\u0005\u0011\u0004\u0002\u0113\u0115\u0007\u0002\u0002\u0003",
        "\u0114\u0112\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002",
        "\u0115.\u0003\u0002\u0002\u0002\u0116\u0118\u0005\u0013\u0005\u0002",
        "\u0117\u0116\u0003\u0002\u0002\u0002\u0118\u011b\u0003\u0002\u0002\u0002",
        "\u0119\u0117\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002",
        "\u011a\u011c\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002",
        "\u011c\u0120\u0007\u007f\u0002\u0002\u011d\u011f\u0005\u0013\u0005\u0002",
        "\u011e\u011d\u0003\u0002\u0002\u0002\u011f\u0122\u0003\u0002\u0002\u0002",
        "\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002",
        "\u0121\u0129\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002\u0002",
        "\u0123\u0125\u0005\u0011\u0004\u0002\u0124\u0123\u0003\u0002\u0002\u0002",
        "\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002",
        "\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u012a\u0003\u0002\u0002\u0002",
        "\u0128\u012a\u0007\u0002\u0002\u0003\u0129\u0124\u0003\u0002\u0002\u0002",
        "\u0129\u0128\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002",
        "\u012b\u012c\b\u0013\u0007\u0002\u012c\u012d\b\u0013\u0007\u0002\u012d",
        "0\u0003\u0002\u0002\u0002\u012e\u0132\u0007}\u0002\u0002\u012f\u0131",
        "\u0005\u0013\u0005\u0002\u0130\u012f\u0003\u0002\u0002\u0002\u0131\u0134",
        "\u0003\u0002\u0002\u0002\u0132\u0130\u0003\u0002\u0002\u0002\u0132\u0133",
        "\u0003\u0002\u0002\u0002\u0133\u0136\u0003\u0002\u0002\u0002\u0134\u0132",
        "\u0003\u0002\u0002\u0002\u0135\u0137\u0005\u0011\u0004\u0002\u0136\u0135",
        "\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0138",
        "\u0003\u0002\u0002\u0002\u0138\u0139\b\u0014\u000b\u0002\u01392\u0003",
        "\u0002\u0002\u0002\u013a\u013c\u0005\u0013\u0005\u0002\u013b\u013a\u0003",
        "\u0002\u0002\u0002\u013c\u013f\u0003\u0002\u0002\u0002\u013d\u013b\u0003",
        "\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002\u013e\u0140\u0003",
        "\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002\u0140\u0141\u0007",
        "]\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0143\b\u0015",
        "\f\u0002\u01434\u0003\u0002\u0002\u0002\u0144\u0146\u0005\u0013\u0005",
        "\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u0146\u0149\u0003\u0002\u0002",
        "\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002",
        "\u0002\u0148\u014c\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002",
        "\u0002\u014a\u014d\u0005\u0011\u0004\u0002\u014b\u014d\u0007\u0002\u0002",
        "\u0003\u014c\u014a\u0003\u0002\u0002\u0002\u014c\u014b\u0003\u0002\u0002",
        "\u0002\u014d6\u0003\u0002\u0002\u0002\u014e\u0150\u0005\u0013\u0005",
        "\u0002\u014f\u014e\u0003\u0002\u0002\u0002\u0150\u0153\u0003\u0002\u0002",
        "\u0002\u0151\u014f\u0003\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002",
        "\u0002\u0152\u0157\u0003\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002",
        "\u0002\u0154\u0156\n\u0006\u0002\u0002\u0155\u0154\u0003\u0002\u0002",
        "\u0002\u0156\u0159\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002\u0002",
        "\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0158\u015c\u0003\u0002\u0002",
        "\u0002\u0159\u0157\u0003\u0002\u0002\u0002\u015a\u015d\u0005\u0011\u0004",
        "\u0002\u015b\u015d\u0007\u0002\u0002\u0003\u015c\u015a\u0003\u0002\u0002",
        "\u0002\u015c\u015b\u0003\u0002\u0002\u0002\u015d8\u0003\u0002\u0002",
        "\u0002\u015e\u0160\u0005\u0013\u0005\u0002\u015f\u015e\u0003\u0002\u0002",
        "\u0002\u0160\u0163\u0003\u0002\u0002\u0002\u0161\u015f\u0003\u0002\u0002",
        "\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0164\u0003\u0002\u0002",
        "\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0164\u0168\u0007\u007f\u0002",
        "\u0002\u0165\u0167\u0005\u0013\u0005\u0002\u0166\u0165\u0003\u0002\u0002",
        "\u0002\u0167\u016a\u0003\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002",
        "\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u0171\u0003\u0002\u0002",
        "\u0002\u016a\u0168\u0003\u0002\u0002\u0002\u016b\u016d\u0005\u0011\u0004",
        "\u0002\u016c\u016b\u0003\u0002\u0002\u0002\u016d\u016e\u0003\u0002\u0002",
        "\u0002\u016e\u016c\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002",
        "\u0002\u016f\u0172\u0003\u0002\u0002\u0002\u0170\u0172\u0007\u0002\u0002",
        "\u0003\u0171\u016c\u0003\u0002\u0002\u0002\u0171\u0170\u0003\u0002\u0002",
        "\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173\u0174\b\u0018\u0007",
        "\u0002\u0174\u0175\b\u0018\u0007\u0002\u0175:\u0003\u0002\u0002\u0002",
        "\u0176\u0178\n\u0007\u0002\u0002\u0177\u0176\u0003\u0002\u0002\u0002",
        "\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u0177\u0003\u0002\u0002\u0002",
        "\u0179\u017a\u0003\u0002\u0002\u0002\u017a<\u0003\u0002\u0002\u0002",
        "\u017b\u017c\u0007_\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002",
        "\u017d\u017e\b\u001a\u0007\u0002\u017e\u017f\b\u001a\r\u0002\u017f>",
        "\u0003\u0002\u0002\u0002\u0180\u0182\u0005\u0013\u0005\u0002\u0181\u0180",
        "\u0003\u0002\u0002\u0002\u0182\u0185\u0003\u0002\u0002\u0002\u0183\u0181",
        "\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0187",
        "\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0186\u0188",
        "\n\u0004\u0002\u0002\u0187\u0186\u0003\u0002\u0002\u0002\u0187\u0188",
        "\u0003\u0002\u0002\u0002\u0188\u018c\u0003\u0002\u0002\u0002\u0189\u018b",
        "\n\u0005\u0002\u0002\u018a\u0189\u0003\u0002\u0002\u0002\u018b\u018e",
        "\u0003\u0002\u0002\u0002\u018c\u018d\u0003\u0002\u0002\u0002\u018c\u018a",
        "\u0003\u0002\u0002\u0002\u018d\u0191\u0003\u0002\u0002\u0002\u018e\u018c",
        "\u0003\u0002\u0002\u0002\u018f\u0192\u0005\u0011\u0004\u0002\u0190\u0192",
        "\u0007\u0002\u0002\u0003\u0191\u018f\u0003\u0002\u0002\u0002\u0191\u0190",
        "\u0003\u0002\u0002\u0002\u0192@\u0003\u0002\u0002\u0002\u0193\u0195",
        "\u0005\u0013\u0005\u0002\u0194\u0193\u0003\u0002\u0002\u0002\u0195\u0198",
        "\u0003\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002\u0196\u0197",
        "\u0003\u0002\u0002\u0002\u0197\u0199\u0003\u0002\u0002\u0002\u0198\u0196",
        "\u0003\u0002\u0002\u0002\u0199\u019d\u0007\u007f\u0002\u0002\u019a\u019c",
        "\u0005\u0013\u0005\u0002\u019b\u019a\u0003\u0002\u0002\u0002\u019c\u019f",
        "\u0003\u0002\u0002\u0002\u019d\u019b\u0003\u0002\u0002\u0002\u019d\u019e",
        "\u0003\u0002\u0002\u0002\u019e\u01a6\u0003\u0002\u0002\u0002\u019f\u019d",
        "\u0003\u0002\u0002\u0002\u01a0\u01a2\u0005\u0011\u0004\u0002\u01a1\u01a0",
        "\u0003\u0002\u0002\u0002\u01a2\u01a3\u0003\u0002\u0002\u0002\u01a3\u01a1",
        "\u0003\u0002\u0002\u0002\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4\u01a7",
        "\u0003\u0002\u0002\u0002\u01a5\u01a7\u0007\u0002\u0002\u0003\u01a6\u01a1",
        "\u0003\u0002\u0002\u0002\u01a6\u01a5\u0003\u0002\u0002\u0002\u01a7\u01a8",
        "\u0003\u0002\u0002\u0002\u01a8\u01a9\b\u001c\u0007\u0002\u01a9\u01aa",
        "\b\u001c\u0007\u0002\u01aa\u01ab\b\u001c\u0007\u0002\u01abB\u0003\u0002",
        "\u0002\u0002D\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\fITbg",
        "lsx\u007f\u0088\u008f\u0097\u009c\u00a4\u00a9\u00b0\u00b9\u00c1\u00ca",
        "\u00d2\u00db\u00e3\u00ea\u00f0\u00f3\u00fb\u00ff\u0106\u010a\u010f\u0114",
        "\u0119\u0120\u0126\u0129\u0132\u0136\u013d\u0147\u014c\u0151\u0157\u015c",
        "\u0161\u0168\u016e\u0171\u0179\u0183\u0187\u018c\u0191\u0196\u019d\u01a3",
        "\u01a6\u000e\u0007\u0003\u0002\u0007\u0005\u0002\b\u0002\u0002\u0007",
        "\u0006\u0002\u0007\u0004\u0002\u0006\u0002\u0002\u0007\u0007\u0002\u0007",
        "\t\u0002\u0007\b\u0002\u0007\n\u0002\u0007\u000b\u0002\u0007\f\u0002"].join("");


    var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

    var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

    function NotepadLexer(input) {
        antlr4.Lexer.call(this, input);
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
        return this;
    }

    NotepadLexer.prototype = Object.create(antlr4.Lexer.prototype);
    NotepadLexer.prototype.constructor = NotepadLexer;

    NotepadLexer.EOF = antlr4.Token.EOF;
    NotepadLexer.ATTR_KEYS = 1;
    NotepadLexer.CHAPTER_MARK = 2;
    NotepadLexer.NL = 3;
    NotepadLexer.S = 4;
    NotepadLexer.WORD = 5;
    NotepadLexer.SINGLE_WORD = 6;
    NotepadLexer.BLOCK_VOC_START = 7;
    NotepadLexer.EQ = 8;
    NotepadLexer.ATTR_V = 9;
    NotepadLexer.CHAPTER_V = 10;
    NotepadLexer.INTERP = 11;
    NotepadLexer.PHRASE = 12;
    NotepadLexer.NOTE = 13;
    NotepadLexer.VOC_EXIT = 14;
    NotepadLexer.BLOCK_START = 15;
    NotepadLexer.LINE = 16;
    NotepadLexer.INTERP_EXIT = 17;
    NotepadLexer.BLOCK_NOTE_START = 18;
    NotepadLexer.TL = 19;
    NotepadLexer.EMPTY_LINE = 20;
    NotepadLexer.NOTE_LINE_0 = 21;
    NotepadLexer.NOTE_EXIT_0 = 22;
    NotepadLexer.NOTE_TYPE = 23;
    NotepadLexer.TR = 24;
    NotepadLexer.NOTE_LINE = 25;
    NotepadLexer.NOTE_EXIT = 26;

    NotepadLexer.ModeAttr1 = 1;
    NotepadLexer.ModeAttr2 = 2;
    NotepadLexer.ModeChapter = 3;
    NotepadLexer.ModeVoc = 4;
    NotepadLexer.ModeBlock = 5;
    NotepadLexer.ModeBlock2 = 6;
    NotepadLexer.ModeNote = 7;
    NotepadLexer.ModeNote0 = 8;
    NotepadLexer.ModeNote2 = 9;
    NotepadLexer.ModeNote3 = 10;

    NotepadLexer.modeNames = [ "DEFAULT_MODE", "ModeAttr1", "ModeAttr2", "ModeChapter",
        "ModeVoc", "ModeBlock", "ModeBlock2", "ModeNote",
        "ModeNote0", "ModeNote2", "ModeNote3" ];

    NotepadLexer.literalNames = [ null, null, "'#'", null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, "']'" ];

    NotepadLexer.symbolicNames = [ null, "ATTR_KEYS", "CHAPTER_MARK", "NL",
        "S", "WORD", "SINGLE_WORD", "BLOCK_VOC_START",
        "EQ", "ATTR_V", "CHAPTER_V", "INTERP", "PHRASE",
        "NOTE", "VOC_EXIT", "BLOCK_START", "LINE",
        "INTERP_EXIT", "BLOCK_NOTE_START", "TL",
        "EMPTY_LINE", "NOTE_LINE_0", "NOTE_EXIT_0",
        "NOTE_TYPE", "TR", "NOTE_LINE", "NOTE_EXIT" ];

    NotepadLexer.ruleNames = [ "ATTR_KEYS", "CHAPTER_MARK", "NL", "S", "WORD",
        "SINGLE_WORD", "BLOCK_VOC_START", "F_NOTE", "EQ",
        "ATTR_V", "CHAPTER_V", "INTERP", "PHRASE", "NOTE",
        "VOC_EXIT", "BLOCK_START", "LINE", "INTERP_EXIT",
        "BLOCK_NOTE_START", "TL", "EMPTY_LINE", "NOTE_LINE_0",
        "NOTE_EXIT_0", "NOTE_TYPE", "TR", "NOTE_LINE",
        "NOTE_EXIT" ];

    NotepadLexer.grammarFileName = "NotepadLexer.g4";



    exports.NotepadLexer = NotepadLexer;
});