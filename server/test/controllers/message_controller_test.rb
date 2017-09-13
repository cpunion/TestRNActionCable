require 'test_helper'

class MessageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get message_index_url
    assert_response :success
  end

end
