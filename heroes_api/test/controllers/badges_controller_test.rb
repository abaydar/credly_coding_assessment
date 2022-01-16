require "test_helper"

class BadgesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @badge = badges(:one)
  end

  test "should get index" do
    get badges_url, as: :json
    assert_response :success
  end

  test "should create badge" do
    assert_difference('Badge.count') do
      post badges_url, params: { badge: { badge_template_id: @badge.badge_template_id, issued_at: @badge.issued_at, name: @badge.name, recipient_email: @badge.recipient_email, recipient_first_name: @badge.recipient_first_name, recipient_last_name: @badge.recipient_last_name, user_id: @badge.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show badge" do
    get badge_url(@badge), as: :json
    assert_response :success
  end

  test "should update badge" do
    patch badge_url(@badge), params: { badge: { badge_template_id: @badge.badge_template_id, issued_at: @badge.issued_at, name: @badge.name, recipient_email: @badge.recipient_email, recipient_first_name: @badge.recipient_first_name, recipient_last_name: @badge.recipient_last_name, user_id: @badge.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy badge" do
    assert_difference('Badge.count', -1) do
      delete badge_url(@badge), as: :json
    end

    assert_response 204
  end
end
