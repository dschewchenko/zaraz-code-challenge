export default {
  // The Managed Components to load, with their settings and permissions
  components: [
    {
      name: "tic-tac-toe",
      settings: {
        apiUrl: "https://tic-tac-toe-ai.d-schewchenko91.workers.dev"
      },
      permissions: [
        "access_client_kv",
        "server_network_requests",
        "serve_static_files",
        "provide_server_functionality",
        "provide_widget"
      ],
    },
  ],
  // The target server URL to proxy
  //   target: "http://127.0.0.1:8000",
  // The hostname to which WebCM should bind
  hostname: "localhost",
  // The tracking URL will get all POST requests coming from `webcm.track`
  trackPath: "/webcm/track",
  // The port WebCM should listen to
  port: 1337,
  // Optional: hash key to make sure cookies set by WebCM aren't tampered with
  cookiesKey: "something-very-secret",
}
