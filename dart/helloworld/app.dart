import 'dart:io';

main() async {
  var server = await HttpServer.bind(InternetAddress.LOOPBACK_IP_V4, 4040);
  print('listening on localhost, port ${server.port}');

  await for (var request in server) {
    request.response
      ..headers.contentType = new ContentType('text', 'plain', charset: 'utf-8')
      ..write('Hello Dart!')
      ..close();
  }
}
